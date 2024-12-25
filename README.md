# FAMOUS-IA: Chatbot IA pour WhatsApp avec Baileys

## Aperçu

**FAMOUS-IA** est un chatbot intelligent conçu pour être intégré à WhatsApp en utilisant la bibliothèque [Baileys](https://github.com/whiskeysockets/baileys). Ce chatbot exploite l'IA pour fournir des réponses interactives et contextuelles, ce qui en fait un outil puissant pour le support client, la diffusion d'informations, et plus encore. Le chatbot est capable de gérer plusieurs langues et propose une gamme de services incluant le développement web, le marketing digital, le développement d'applications mobiles, et le recrutement.

## Fonctionnalités

- **Support Multilingue**: Le chatbot peut détecter et répondre en plusieurs langues, y compris l'anglais, le français, et le créole haïtien.
- **Demandes de Services**: Les utilisateurs peuvent demander des informations sur les différents services offerts par l'entreprise.
- **Informations sur les Prix**: Le chatbot fournit des détails sur les prix pour différents services.
- **Support Technique**: Les utilisateurs peuvent obtenir des informations de contact pour le support technique.
- **Opportunités d'Emploi**: Le chatbot fournit des informations sur les opportunités d'emploi et le recrutement.
- **Réponses Basées sur l'IA**: Utilise le modèle GPT-3.5-turbo d'OpenAI pour générer des réponses avancées et contextuelles.

## Installation

Pour commencer avec FAMOUS-IA, suivez ces étapes :

1. **Cloner le Dépôt** :
   ```bash
   git clone https://github.com/yourusername/FAMOUS-IA.git
   cd FAMOUS-IA
   ```

2. **Installer les Dépendances** :
   ```bash
   npm install
   ```

3. **Configurer les Variables d'Environnement** :
   Créez un fichier `.env` dans le répertoire racine et ajoutez votre clé API OpenAI :
   ```env
   OPENAI_API_KEY=your_openai_api_key_here
   ```

4. **Lancer le Chatbot** :
   ```bash
   npm start
   ```

## Utilisation

Une fois le chatbot en cours d'exécution, vous pouvez interagir avec lui via WhatsApp. Le chatbot répondra à diverses commandes et demandes en fonction de l'intention détectée dans le message de l'utilisateur.

### Exemples de Commandes

- **Salutation** : "Hello", "Bonjour", "Bonjou"
- **Demande de Services** : "Quels services proposez-vous ?", "Kisa sèvis ou bay?"
- **Demande de Prix** : "Combien ça coûte ?", "Konbyen sa koute?"
- **Support Technique** : "J'ai un problème technique", "Mwen gen yon pwoblèm teknik"
- **Opportunités d'Emploi** : "Y a-t-il des postes vacants ?", "Èske gen okenn travay disponib?"

## Problèmes Actuels

### Problème : Erreur de Tampon Hors Limites

**Description** : Le chatbot rencontre actuellement une erreur `RangeError [ERR_BUFFER_OUT_OF_BOUNDS]`, indiquant que l'application tente d'écrire en dehors des limites d'un tampon. Cette erreur est probablement liée à la manipulation des données dans la bibliothèque `@whiskeysockets/baileys`.

**Message d'Erreur** :
```
RangeError [ERR_BUFFER_OUT_OF_BOUNDS]: "length" is outside of buffer bounds
```

### Problème : Trop de Requêtes

**Description** : Le chatbot rencontre également une erreur `429 Too Many Requests` de l'API OpenAI, indiquant que la limite de taux pour les requêtes API a été dépassée.

**Message d'Erreur** :
```
429 Too Many Requests
```

## Contribuer

Les contributions sont les bienvenues ! Si vous avez des suggestions ou des améliorations, veuillez ouvrir un problème ou soumettre une demande de tirage.

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

Pour toute question ou support, veuillez contacter [Contact](Contact.md)
.

---

# FAMOUS-IA: AI Chatbot for WhatsApp with Baileys

## Overview

**FAMOUS-IA** is an intelligent chatbot designed to be integrated with WhatsApp using the [Baileys](https://github.com/whiskeysockets/baileys) library. This chatbot leverages AI to provide interactive and context-aware responses, making it a powerful tool for customer support, information dissemination, and more. The chatbot is capable of handling multiple languages and offers a range of services including web development, digital marketing, mobile app development, and recruitment.

## Features

- **Multi-Language Support**: The chatbot can detect and respond in multiple languages including English, French, and Haitian Creole.
- **Service Inquiry**: Users can inquire about various services offered by the company.
- **Pricing Information**: The chatbot provides pricing details for different services.
- **Technical Support**: Users can get contact information for technical support.
- **Job Opportunities**: The chatbot provides information about job opportunities and recruitment.
- **AI-Powered Responses**: Utilizes OpenAI's GPT-3.5-turbo model to generate advanced, contextual responses.

## Installation

To get started with FAMOUS-IA, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/FAMOUS-IA.git
   cd FAMOUS-IA
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory and add your OpenAI API key:
   ```env
   OPENAI_API_KEY=your_openai_api_key_here
   ```

4. **Run the Chatbot**:
   ```bash
   npm start
   ```

## Usage

Once the chatbot is running, you can interact with it via WhatsApp. The chatbot will respond to various commands and inquiries based on the intent detected in the user's message.

### Example Commands

- **Greeting**: "Hello", "Bonjour", "Bonjou"
- **Service Inquiry**: "What services do you offer?", "Kisa sèvis ou bay?"
- **Pricing Inquiry**: "How much does it cost?", "Konbyen sa koute?"
- **Technical Support**: "I have a technical issue", "Mwen gen yon pwoblèm teknik"
- **Job Opportunities**: "Are there any job openings?", "Èske gen okenn travay disponib?"

## Current Issues

### Problem: Buffer Out of Bounds Error

**Description**: The chatbot is currently facing a `RangeError [ERR_BUFFER_OUT_OF_BOUNDS]` error, indicating that the application is trying to write outside the bounds of a buffer. This error is likely related to the manipulation of data within the `@whiskeysockets/baileys` library.

**Error Message**:
```
RangeError [ERR_BUFFER_OUT_OF_BOUNDS]: "length" is outside of buffer bounds
```

### Problem: Too Many Requests Error

**Description**: The chatbot is also encountering a `429 Too Many Requests` error from the OpenAI API, indicating that the rate limit for API requests has been exceeded.

**Error Message**:
```
429 Too Many Requests
```

## Contributing

Contributions are welcome! If you have any suggestions or improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

For any questions or support, please contact [Contact](Contact.md).

---

## Besoin d'Aide

Je suis à la recherche d'aide pour résoudre ces problèmes. Si vous avez des idées ou des solutions, n'hésitez pas à me contacter. Je suis également intéressé par des alternatives faciles à utiliser et gratuites pour résoudre ces problèmes.

## Need Help

I am seeking help to resolve these issues. If you have any ideas or solutions, please feel free to contact me. I am also interested in easy-to-use and free alternatives to solve these problems.
