import pino from 'pino';
import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import readline from 'readline';
import NodeCache from 'node-cache';
import { generateResponse, callAIAPI } from './ai.js';
import dotenv from 'dotenv';
dotenv.config();

// Baileys Import
import pkg from '@whiskeysockets/baileys';
const { 
  makeInMemoryStore, 
  useMultiFileAuthState, 
  fetchLatestBaileysVersion, 
  makeWASocket, 
  PHONENUMBER_MCC,
  makeCacheableSignalKeyStore,
  jidNormalizedUser
} = pkg;

// Configuration
const CONFIG = {
  phoneNumber: process.env.PHONE_NUMBER || "256709824720",
  ownerPath: './database/owner.json',
  sessionPath: './session',
  maxMessagesPerMinute: 20,
  cacheTTL: 600
};

// Logging
const logger = pino({ level: 'silent' });

// Load Owner Configuration
const loadOwnerConfig = () => {
  try {
    return JSON.parse(fs.readFileSync(CONFIG.ownerPath, 'utf8'));
  } catch (error) {
    console.error(chalk.red('Error loading owner configuration:'), error);
    return [{ id: CONFIG.phoneNumber }];
  }
};

const owner = loadOwnerConfig();
const phoneNumber = CONFIG.phoneNumber;

// Caches
const firstInteractionCache = new NodeCache({ stdTTL: CONFIG.cacheTTL });
const messageCounter = new NodeCache({ stdTTL: 60 });
const errorMessageCache = new NodeCache({ stdTTL: 60 });

async function startBot() {
  const { version } = await fetchLatestBaileysVersion();
  const { state, saveCreds } = await useMultiFileAuthState(CONFIG.sessionPath);

  const bot = makeWASocket({
    logger,
    printQRInTerminal: true,
    browser: ["RAIDEN-AI", "Chrome", "20.0.04"],
    auth: {
      creds: state.creds,
      keys: makeCacheableSignalKeyStore(state.keys, logger)
    },
    markOnlineOnConnect: true
  });

  // Message Handling
  bot.ev.on('messages.upsert', async (m) => {
    const msg = m.messages[0];
    if (!msg.message || msg.key.fromMe) return;

    const sender = msg.key.remoteJid;
    const text = msg.message.conversation || msg.message.extendedTextMessage?.text || '';

    // Rate Limiting
    const messageCount = messageCounter.get(sender) || 0;
    if (messageCount >= CONFIG.maxMessagesPerMinute) {
      await bot.sendMessage(sender, { 
        text: "🚫 Trop de messages. Veuillez patienter quelques instants." 
      });
      return;
    }
    messageCounter.set(sender, messageCount + 1);

    // First Interaction Detection
    const isFirstInteraction = !firstInteractionCache.get(sender);
    if (isFirstInteraction) {
      firstInteractionCache.set(sender, true);
    }

    // Generate Response
    try {
      const response = await generateResponse(text, sender.split('@')[0], isFirstInteraction);
      if (response && response.text) {
        await bot.sendMessage(sender, { text: response.text });
      }
    } catch (error) {
      console.error(chalk.red('Response Generation Error:'), error);
    }
  });

  // Connection Update
  bot.ev.on('connection.update', async (update) => {
    const { connection, lastDisconnect } = update;
    
    if (connection === 'open') {
      console.log(chalk.green('✅ WhatsApp Bot Connected Successfully'));
      
      // Send startup message to owner
      await bot.sendMessage(`${phoneNumber}@s.whatsapp.net`, { 
        text: "🚀 RAIDEN-AI Bot started and ready to assist!" 
      });
    }
    
    if (connection === 'close') {
      const shouldReconnect = lastDisconnect.error?.output?.statusCode !== 401;
      console.log(shouldReconnect 
        ? chalk.yellow('Reconnecting...') 
        : chalk.red('Connection closed. Need to scan QR again.')
      );
      if (shouldReconnect) {
        startBot();
      }
    }
  });

  bot.ev.on('creds.update', saveCreds);
}

// Error Handling
process.on('uncaughtException', (err) => {
  console.error(chalk.red('Uncaught Exception:'), err);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error(chalk.red('Unhandled Rejection at:'), promise, 'reason:', reason);
});

// Start Bot
startBot();