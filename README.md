Getting Started

Clone the repository and move into the project folder.

Install dependencies for both backend and frontend using npm install.

In the backend folder, create a .env file. Add your MongoDB connection string, your OpenAI API key, and set the port (for example: PORT=5000).

Start the backend with npm start inside the backend folder. It will run on http://localhost:5000.

Start the frontend with npm start inside the frontend folder. It will run on http://localhost:3000.

Open the app in your browser. Register or log in, enter a product name and keywords, click Generate, and save your AI‑generated description.

Description

AI Product Description Generator is a full‑stack web application designed to help businesses and creators craft compelling product descriptions with ease. The 

platform combines secure user authentication, a modern frontend, and powerful AI integration to deliver a seamless workflow from idea to saved content.

✨ Key Features
User Authentication: Secure registration and login using JWT tokens.

AI‑Powered Generation: Generate persuasive product descriptions by simply entering a product name and keywords.

Save & Retrieve: Store generated descriptions in MongoDB and access them anytime from your personal dashboard.

Clean UI: Built with React for a responsive and intuitive user experience.

Robust Backend: Express.js and MongoDB provide a scalable and maintainable server architecture.

Error Handling: Clear feedback for login, generation, and saving actions ensures smooth usability.

🛠 Tech Stack
Frontend: React, Axios

Backend: Express.js, Node.js, JWT Authentication

Database: MongoDB

AI Integration: OpenAI API (with option to swap in Hugging Face or other providers)

**Important
**This project uses the OpenAI API for product description generation.
**To use it, you’ll need to obtain your own API key:
**Sign up or log in at OpenAI Platform.
**Navigate to View API Keys in your account settings.
**Click Create new secret key and copy it.
**Add it to your .env file in the project root:
**[OPENAI_API_KEY=sk-your-key-here]

🚀 Workflow
Register or log in securely.

Enter product name and keywords.

Generate a description using AI.

Save the description to your personal list.

Retrieve and manage saved descriptions anytime.
