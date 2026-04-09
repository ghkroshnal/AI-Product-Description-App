## AI Product Description Generator

## 📖 Description
AI Product Description Generator is a full‑stack web application designed to help businesses and creators craft compelling product descriptions with ease. The platform combines secure user authentication, a modern frontend, and powerful AI integration to deliver a seamless workflow from idea to saved content.

---

## 🚀 Getting Started

**Step 1: Clone the repository**  
Clone the repo and move into the project folder.

**Step 2: Install dependencies**  
Run `npm install` in both the backend and frontend folders.

**Step 3: Configure environment variables**  
In the backend folder, create a `.env` file and add:
- `MONGO_URI` → your MongoDB connection string  
- `OPENAI_API_KEY` → your OpenAI API key  
- `PORT` → for example `5000`

**Step 4: Start the backend**  
Run `npm start` inside the backend folder. It will run on `http://localhost:5000`.

**Step 5: Start the frontend**  
Run `npm start` inside the frontend folder. It will run on `http://localhost:3000`.

**Step 6: Use the app**  
Open the app in your browser. Register or log in, enter a product name and keywords, click **Generate**, and save your AI‑generated description.

---

## ✨ Key Features
- **User Authentication**: Secure registration and login using JWT tokens.  
- **AI‑Powered Generation**: Generate persuasive product descriptions by simply entering a product name and keywords.  
- **Save & Retrieve**: Store generated descriptions in MongoDB and access them anytime from your personal dashboard.  
- **Clean UI**: Built with React for a responsive and intuitive user experience.  
- **Robust Backend**: Express.js and MongoDB provide a scalable and maintainable server architecture.  
- **Error Handling**: Clear feedback for login, generation, and saving actions ensures smooth usability.  

---

## 🛠 Tech Stack
- **Frontend**: React, Axios  
- **Backend**: Express.js, Node.js, JWT Authentication  
- **Database**: MongoDB  
- **AI Integration**: OpenAI API (with option to swap in Hugging Face or other providers)  

---

## 🔑 Important
This project uses the **OpenAI API** for product description generation.  
To use it, you’ll need to obtain your own API key:

1. Sign up or log in at [OpenAI Platform](https://platform.openai.com).  
2. Navigate to **View API Keys** in your account settings.  
3. Click **Create new secret key** and copy it.  
4. Add it to your `.env` file in the backend folder:
   ```
   OPENAI_API_KEY=sk-your-key-here
   ```


## 📂 Workflow
1. Register or log in securely.  
2. Enter product name and keywords.  
3. Generate a description using AI.  
4. Save the description to your personal list.  
5. Retrieve and manage saved descriptions anytime.
