# OpenAI Chatbot - Short Description

## What is it?

A full-stack web application that lets users chat with an AI-powered chatbot. Users can create accounts, log in securely, and have conversations that are saved to their profile.

## Key Features

✨ **User Authentication** - Sign up and login with secure JWT tokens  
💬 **AI Chat** - Real-time conversations powered by OpenRouter API  
💾 **Chat History** - All messages stored in MongoDB  
📱 **Responsive UI** - Works on desktop, tablet, and mobile  
🎨 **Modern Design** - Dark theme with Material-UI  
⚡ **Fast** - Built with React (Vite) and TypeScript  

## Tech Stack

**Backend**: Node.js, Express, TypeScript, MongoDB, Mongoose  
**Frontend**: React 19, TypeScript, Vite, Material-UI  
**Auth**: JWT + HTTP-only cookies with bcrypt hashing  
**API**: OpenRouter (OpenAI-compatible)  

## Quick Start

```bash
# Backend
cd backend
npm install
# Set up .env file
npm run dev

# Frontend (new terminal)
cd frontend
npm install
npm run dev
```

Visit `http://localhost:5173` to use the app!

## Main Pages

- **Home** - Landing page with intro
- **Signup/Login** - User authentication
- **Chat** - Main chatbot interface
- **Protected Routes** - Chat only accessible when logged in

That's it! A simple, secure, and modern AI chatbot application.
