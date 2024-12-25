import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

class BusinessAIAssistant {
  constructor() {
    this.COMPREHENSIVE_SERVICES = {
      web_development: {
        name: {
          en: "Web Development",
          fr: "Développement Web",
          ht: "Devlopman Web"
        },
        categories: [
          "E-commerce Websites",
          "Corporate Websites",
          "Portfolio Websites",
          "Landing Pages",
          "Blog Platforms"
        ],
        pricing_tiers: [
          { tier: "Basic", price_range: "1000-3000 HTG", features: ["Single Page", "Responsive Design", "Basic SEO"] },
          { tier: "Standard", price_range: "3000-7000 HTG", features: ["Multi-Page", "Advanced SEO", "Contact Forms", "Basic Analytics"] },
          { tier: "Premium", price_range: "7000-15000 HTG", features: ["Custom Design", "E-commerce Integration", "Advanced Analytics", "SEO Optimization", "Performance Tuning"] }
        ],
        technologies: ["React", "Vue.js", "WordPress", "Node.js", "PHP", "Laravel"]
      },
      digital_marketing: {
        name: {
          en: "Digital Marketing",
          fr: "Marketing Digital",
          ht: "Machenaj Dijital"
        },
        services: [
          "Social Media Marketing",
          "Google Ads Management",
          "Content Marketing",
          "Email Campaign Design",
          "Brand Strategy Consulting"
        ],
        pricing_range: "5000-50000 HTG"
      },
      mobile_app_development: {
        name: {
          en: "Mobile App Development",
          fr: "Développement d'Applications Mobiles",
          ht: "Devlopman Aplikasyon Mobil"
        },
        platforms: ["Android", "iOS", "Cross-Platform"],
        pricing_tiers: [
          { tier: "Basic App", price_range: "10000-25000 HTG" },
          { tier: "Advanced App", price_range: "25000-75000 HTG" },
          { tier: "Enterprise Solution", price_range: "75000-250000 HTG" }
        ]
      },
      recruitment: {
        name: {
          en: "Talent Recruitment",
          fr: "Recrutement de Talents",
          ht: "Rekritman Talèn"
        },
        job_categories: [
          "IT & Technology",
          "Digital Marketing",
          "Graphic Design",
          "Business Development",
          "Customer Support"
        ],
        recruitment_link: "https://famous-tech-group.com/careers"
      }
    };

    this.LANGUAGE_CONFIGURATIONS = {
      'en': {
        welcome_messages: [
          "Welcome to RAIDEN AI! 🚀",
          "Innovation starts here! How can we help you today?",
          "Your digital transformation begins now!"
        ],
        service_intro: "Explore our cutting-edge services:",
        error_responses: [
          "I'm processing your request...",
          "Give me a moment to understand your needs.",
          "Let me analyze that for you."
        ]
      },
      'fr': {
        welcome_messages: [
          "Bienvenue chez RAIDEN AI 🚀",
          "L'innovation commence ici ! Comment pouvons-nous vous aider ?",
          "Votre transformation digitale commence maintenant !"
        ],
        service_intro: "Découvrez nos services de pointe :",
        error_responses: [
          "Je traite votre demande...",
          "Donnez-moi un instant pour comprendre vos besoins.",
          "Laissez-moi analyser cela pour vous."
        ]
      },
      'ht': {
        welcome_messages: [
          "Byenveni nan RAIDEN AI! 🚀",
          "Inovasyon komanse isit! Koman nou ka ede ou?",
          "Transformasyon dijital ou kòmanse kounye a!"
        ],
        service_intro: "Eksplore sèvis avançe nou yo:",
        error_responses: [
          "Mwen ap trete demand ou...",
          "Bay m yon moment pou m konprann bezwen ou.",
          "Kite m analize sa pou ou."
        ]
      }
    };

    this.INTENT_MATCHING = {
      greeting: ['hello', 'hi', 'bonjou', 'hey', 'salut'],
      services: ['service', 'sèvis', 'help', 'ede'],
      pricing: ['price', 'cost', 'pri', 'kombyen'],
      technical_support: ['problem', 'issue', 'technical', 'teknik'],
      recruitment: ['job', 'career', 'work', 'travay', 'rekri']
    };
  }

  detectLanguage(phoneNumber) {
    const countryCodeMap = {
      '1': 'en', '33': 'fr', '509': 'ht', 
      '228': 'fr', '242': 'fr', '221': 'fr', 
      '237': 'fr', '229': 'fr', '225': 'fr'
    };
    
    const countryCode = phoneNumber.substring(0, 3);
    return countryCodeMap[countryCode] || 'en';
  }

  detectIntent(text) {
    text = text.toLowerCase();
    
    for (const [intent, keywords] of Object.entries(this.INTENT_MATCHING)) {
      if (keywords.some(keyword => text.includes(keyword))) {
        return intent;
      }
    }
    
    return 'default';
  }

  async generateResponse(text, phoneNumber, isFirstInteraction) {
    const lang = this.detectLanguage(phoneNumber);
    const intent = this.detectIntent(text);

    // First Interaction Logic
    if (isFirstInteraction) {
      const welcomeMessage = this.LANGUAGE_CONFIGURATIONS[lang].welcome_messages[
        Math.floor(Math.random() * this.LANGUAGE_CONFIGURATIONS[lang].welcome_messages.length)
      ];
      
      return {
        text: `${welcomeMessage}\n\n` +
               `${this.LANGUAGE_CONFIGURATIONS[lang].service_intro}\n` +
               "1. 💻 Web Development\n" +
               "2. 📱 Mobile Apps\n" +
               "3. 📊 Digital Marketing\n" +
               "4. 👥 Job Opportunities\n" +
               "5. 📞 Contact Us"
      };
    }

    // Intent-Based Responses
    switch(intent) {
      case 'greeting':
        return this.handleGreeting(lang);
      
      case 'services':
        return this.handleServiceInquiry(text, lang);
      
      case 'pricing':
        return this.handlePricingInquiry(text, lang);
      
      case 'technical_support':
        return this.handleTechnicalSupport(text, lang);
      
      case 'recruitment':
        return this.handleRecruitment(lang);
      
      default:
        return await this.handleDefaultResponse(text, lang);
    }
  }

  handleGreeting(lang) {
    const greetings = {
      'en': [
        "Hello! How can I assist you today?",
        "Hi there! What service are you interested in?"
      ],
      'fr': [
        "Bonjour ! Comment puis-je vous aider aujourd'hui ?",
        "Salut ! Quel service vous intéresse ?"
      ],
      'ht': [
        "Bonjou! Koman m ka ede ou jodi a?",
        "Alo! Ki sèvis ou enterese?"
      ]
    };

    return {
      text: greetings[lang][Math.floor(Math.random() * greetings[lang].length)]
    };
  }

  handleServiceInquiry(text, lang) {
    const serviceDetails = Object.entries(this.COMPREHENSIVE_SERVICES).map(
      ([key, service]) => `• ${service.name[lang]}`
    ).join('\n');

    return {
      text: `🌐 Our Services:\n${serviceDetails}\n\nWhich one would you like to know more about?`
    };
  }

  handlePricingInquiry(text, lang) {
    const pricingInfo = Object.entries(this.COMPREHENSIVE_SERVICES)
      .filter(([key, service]) => service.pricing_tiers || service.pricing_range)
      .map(([key, service]) => {
        if (service.pricing_tiers) {
          return `• ${service.name[lang]}: ${service.pricing_tiers.map(t => t.price_range).join(', ')}`;
        }
        return `• ${service.name[lang]}: ${service.pricing_range}`;
      }).join('\n');

    return {
      text: `💰 Pricing Overview:\n${pricingInfo}\n\nFor detailed quotes, please contact us.`
    };
  }

  handleTechnicalSupport(text, lang) {
    return {
      text: "🛠️ Technical Support:\n" +
             "Our team is ready to help you!\n" +
             "Email: sacatechinc@gmail.com\n" +
             "Phone: +256709824720"
    };
  }

  handleRecruitment(lang) {
    const recruitmentService = this.COMPREHENSIVE_SERVICES.recruitment;
    return {
      text: `🌟 Job Opportunities:\n` +
             `Categories: ${recruitmentService.job_categories.join(', ')}\n\n` +
             `Apply now: ${recruitmentService.recruitment_link}`
    };
  }

  async handleDefaultResponse(text, lang) {
    try {
      // Advanced contextual AI response generation
      const aiResponse = await this.generateAIResponse(text, lang);
      return { text: aiResponse };
    } catch (error) {
      console.error("AI Response Error:", error);
      
      const errorResponses = this.LANGUAGE_CONFIGURATIONS[lang].error_responses;
      return { 
        text: errorResponses[Math.floor(Math.random() * errorResponses.length)]
      };
    }
  }

  async generateAIResponse(text, lang) {
    // Placeholder for advanced AI response generation
    // You would integrate a more sophisticated AI service here
    const systemPrompts = {
      'en': "You are an AI assistant for a Haitian tech company. Provide helpful, professional responses.",
      'fr': "Vous êtes un assistant IA pour une entreprise technologique haïtienne. Fournissez des réponses utiles et professionnelles.",
      'ht': "Ou se yon asistan IA pou yon antrepriz teknoloji ayisyen. Bay repons ki ede ak ki pwofesyonèl."
    };

    try {
      const response = await axios.post('https://api.openai.com/v1/chat/completions', {
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: systemPrompts[lang] },
          { role: "user", content: text }
        ]
      }, {
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        }
      });

      return response.data.choices[0].message.content;
    } catch (error) {
      console.error("Advanced AI Response Generation Failed:", error);
      if (error.response && error.response.status === 429) {
        return "I'm currently overloaded with requests. Please try again later.";
      }
      return "I'm having trouble understanding your request right now. Could you please rephrase?";
    }
  }
}

const businessAI = new BusinessAIAssistant();

export async function generateResponse(text, phoneNumber, isFirstInteraction) {
  return await businessAI.generateResponse(text, phoneNumber, isFirstInteraction);
}

export async function callAIAPI(text, lang) {
  return await businessAI.generateAIResponse(text, lang);
}