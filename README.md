# RAIDEN-AI: AI Chatbot for WhatsApp with Baileys

## Overview

**RAIDEN-AI** is an intelligent chatbot designed to be integrated with WhatsApp using the [Baileys](https://github.com/whiskeysockets/baileys) library. This chatbot leverages AI to provide interactive and context-aware responses, making it a powerful tool for customer support, information dissemination, and more. The chatbot is capable of handling multiple languages and offers a range of services including web development, digital marketing, mobile app development, and recruitment.

## Features

- **Multi-Language Support**: The chatbot can detect and respond in multiple languages including English, French, and Haitian Creole.
- **Service Inquiry**: Users can inquire about various services offered by the company.
- **Pricing Information**: The chatbot provides pricing details for different services.
- **Technical Support**: Users can get contact information for technical support.
- **Job Opportunities**: The chatbot provides information about job opportunities and recruitment.
- **AI-Powered Responses**: Utilizes OpenAI's GPT-3.5-turbo model to generate advanced, contextual responses.

## Installation

To get started with RAIDEN-AI, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/pixelPusher03/RAIDEN-AI.git
   cd RAIDEN-AI
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


## Need Help

I am seeking help to resolve these issues. If you have any ideas or solutions, please feel free to contact me. I am also interested in easy-to-use and free alternatives to solve these problems.
