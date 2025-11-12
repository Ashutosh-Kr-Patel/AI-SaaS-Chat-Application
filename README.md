# OpenAI Chatbot Application

A full-stack web application featuring a real-time chatbot powered by OpenAI's API. Users can authenticate, create an account, and have conversations with an AI assistant with chat history persistence.

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Setup & Installation](#setup--installation)
- [Environment Configuration](#environment-configuration)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Frontend Components](#frontend-components)
- [Database Schema](#database-schema)
- [Authentication](#authentication)
- [Troubleshooting](#troubleshooting)

---

## 📖 Project Overview

This is a modern web application that allows users to:
- Create an account and authenticate securely
- Chat with an AI-powered chatbot in real-time
- Store chat history in the database
- Delete chat history when needed
- Responsive UI that works on desktop and mobile devices

The application consists of two main parts:
- **Backend**: Node.js/Express server with TypeScript, MongoDB for persistence
- **Frontend**: React application with Material-UI for styling

---

## 🛠 Tech Stack

### Backend
- **Runtime**: Node.js
- **Language**: TypeScript
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens) with HTTP-only cookies
- **Security**: bcrypt for password hashing, CORS for cross-origin requests
- **API Integration**: OpenRouter AI API (OpenAI-compatible)
- **Validation**: express-validator
- **Development Tools**: Nodemon, Concurrently, Morgan (logging)

### Frontend
- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **UI Library**: Material-UI (MUI)
- **HTTP Client**: Axios
- **Routing**: React Router v7
- **Notifications**: React Hot Toast
- **Code Highlighting**: React Syntax Highlighter
- **Animations**: React Type Animation
- **Icons**: React Icons
- **Development**: ESLint, TypeScript

---

## ✨ Features

### User Authentication
- **Signup**: Create new user accounts with email and password
- **Login**: Secure login with JWT token-based authentication
- **Logout**: Clear authentication tokens and session
- **Session Persistence**: Auto-login on page reload if token is valid

### Chat Interface
- **Real-time Chat**: Send and receive messages from the AI
- **Chat History**: Persistent storage of all conversations
- **Message Display**: User and assistant messages with different styling
- **Code Highlighting**: Automatic syntax highlighting for code blocks in responses
- **Delete Chats**: Clear all chat history with one click
- **Typing Animation**: Welcome screen with animated text

### Security
- **Password Hashing**: Bcrypt with 10-round salting
- **HTTP-only Cookies**: JWT tokens stored securely in HTTP-only cookies
- **CORS Protection**: Cross-origin requests from whitelisted origins
- **Input Validation**: Server-side validation for all user inputs
- **Token Verification**: Middleware to verify JWT tokens on protected routes

### UI/UX
- **Responsive Design**: Mobile, tablet, and desktop support
- **Dark Theme**: Modern dark-themed interface
- **Real-time Notifications**: Toast notifications for user actions
- **Loading States**: Visual feedback during API calls
- **Avatar Display**: User avatars in chat with initials

---

## 📁 Project Structure

```
OpenAI Chatbot/
├── backend/
│   ├── src/
│   │   ├── app.ts                 # Express app configuration
│   │   ├── index.ts               # Server entry point
│   │   ├── config/
│   │   │   └── openai-config.ts   # OpenRouter API configuration
│   │   ├── controllers/
│   │   │   ├── chat-controllers.ts    # Chat message handlers
│   │   │   └── user-controllers.ts    # User auth handlers
│   │   ├── db/
│   │   │   └── connection.ts      # MongoDB connection
│   │   ├── models/
│   │   │   └── User.ts            # User schema & chat schema
│   │   ├── routes/
│   │   │   ├── index.ts           # Main router
│   │   │   ├── chat-routes.ts     # Chat API routes
│   │   │   └── user-routes.ts     # User API routes
│   │   └── utils/
│   │       ├── constants.ts       # App constants
│   │       ├── token-manager.ts   # JWT token creation & verification
│   │       └── validators.ts      # Input validation rules
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
│
└── frontend/
    ├── src/
    │   ├── main.tsx               # React entry point
    │   ├── App.tsx                # Main app component
    │   ├── App.css
    │   ├── index.css
    │   ├── context/
    │   │   └── AuthContext.tsx     # Auth state management
    │   ├── pages/
    │   │   ├── Home.tsx           # Landing page
    │   │   ├── Chat.tsx           # Chat interface
    │   │   ├── Login.tsx          # Login page
    │   │   ├── Signup.tsx         # Signup page
    │   │   └── NotFound.tsx       # 404 page
    │   ├── components/
    │   │   ├── Header.tsx         # Navigation header
    │   │   ├── footer/
    │   │   │   └── Footer.tsx
    │   │   ├── chat/
    │   │   │   └── ChatItem.tsx   # Individual message display
    │   │   ├── typer/
    │   │   │   └── TypingAnim.tsx # Typing animation
    │   │   └── shared/
    │   │       ├── Logo.tsx
    │   │       ├── CustomizedInput.tsx  # Styled input field
    │   │       └── NavigationLink.tsx   # Nav link component
    │   ├── helpers/
    │   │   └── api-communicator.ts     # API request functions
    │   └── assets/
    ├── package.json
    ├── tsconfig.json
    ├── tsconfig.app.json
    ├── tsconfig.node.json
    ├── vite.config.ts
    └── eslint.config.js
```

---

## 🚀 Setup & Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas cloud instance)
- npm or yarn package manager
- OpenRouter API key (https://openrouter.ai/)

### Backend Setup

1. **Navigate to backend directory**
```bash
cd backend
```

2. **Install dependencies**
```bash
npm install
```

3. **Create `.env` file** in the backend root directory with the following variables:
```env
PORT=5000
MONGODB_URL=mongodb://localhost:27017/openai-chatbot
JWT_SECRET=your_jwt_secret_key_here
COOKIE_SECRET=your_cookie_secret_key_here
OPENROUTER_API_KEY=your_openrouter_api_key_here
SITE_URL=http://localhost:5173
SITE_NAME=MyOpenAIChatbot
```

### Frontend Setup

1. **Navigate to frontend directory**
```bash
cd frontend
```

2. **Install dependencies**
```bash
npm install
```

3. **No environment file needed** - API base URL is configured in `main.tsx`

---

## ⚙️ Environment Configuration

### Backend Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Server port | `5000` |
| `MONGODB_URL` | MongoDB connection string | `mongodb://localhost:27017/openai-chatbot` |
| `JWT_SECRET` | Secret key for JWT signing | `your_secret_key` |
| `COOKIE_SECRET` | Secret key for cookie signing | `your_cookie_secret` |
| `OPENROUTER_API_KEY` | OpenRouter API key | `sk-or-...` |
| `SITE_URL` | Frontend URL for CORS | `http://localhost:5173` |
| `SITE_NAME` | Application name for API headers | `MyOpenAIChatbot` |

### Frontend Configuration

The frontend API configuration is set in `src/main.tsx`:
```typescript
axios.defaults.baseURL = "http://localhost:5000/api/v1";
axios.defaults.withCredentials = true;
```

---

## 🏃 Running the Application

### Running Backend

```bash
# Development mode (with watch and reload)
npm run dev

# Build TypeScript
npm run build

# Production mode
npm start
```

The backend server will start on `http://localhost:5000` and connect to MongoDB.

### Running Frontend

```bash
# Development mode (Vite dev server)
npm run dev

# Build for production
npm run build

# Preview production build
npm preview

# Lint code
npm run lint
```

The frontend will be available at `http://localhost:5173`.

### Running Both Simultaneously

From the root directory:
```powershell
# Open two terminals and run in each:
# Terminal 1 - Backend
cd backend; npm run dev

# Terminal 2 - Frontend
cd frontend; npm run dev
```

---

## 🔌 API Endpoints

### User Routes (`/api/v1/user`)

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| `GET` | `/` | No | Get all users |
| `POST` | `/signup` | No | User registration |
| `POST` | `/login` | No | User login |
| `GET` | `/auth-status` | Yes | Verify JWT token |
| `GET` | `/logout` | Yes | User logout |

### Chat Routes (`/api/v1/chat`)

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| `POST` | `/new` | Yes | Send chat message to AI |
| `GET` | `/all-chats` | Yes | Retrieve all chat history |
| `GET` | `/delete` | Yes | Delete all chats |

### Request/Response Examples

#### Signup
```bash
POST /api/v1/user/signup
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "secure_password_123"
}

Response (201):
{
  "message": "OK",
  "name": "John Doe",
  "email": "john@example.com"
}
```

#### Login
```bash
POST /api/v1/user/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "secure_password_123"
}

Response (200):
{
  "message": "OK",
  "name": "John Doe",
  "email": "john@example.com"
}
```

#### Send Chat Message
```bash
POST /api/v1/chat/new
Content-Type: application/json
Authorization: Cookie (auth_token)

{
  "message": "What is JavaScript?"
}

Response (200):
{
  "chats": [
    {
      "id": "uuid",
      "role": "user",
      "content": "What is JavaScript?"
    },
    {
      "id": "uuid",
      "role": "assistant",
      "content": "JavaScript is a programming language..."
    }
  ]
}
```

---

## 🎨 Frontend Components

### Pages

- **Home.tsx**: Landing page with animated welcome message and images
- **Login.tsx**: Login form with email and password validation
- **Signup.tsx**: Registration form with name, email, and password fields
- **Chat.tsx**: Main chat interface with message history and input
- **NotFound.tsx**: 404 page for invalid routes

### Components

- **Header.tsx**: Navigation bar with login/signup or chat/logout links
- **ChatItem.tsx**: Individual message display with code highlighting
- **TypingAnim.tsx**: Animated text typing effect for welcome screen
- **CustomizedInput.tsx**: Styled input field with Material-UI TextField
- **NavigationLink.tsx**: Styled navigation links
- **Logo.tsx**: Application logo component
- **Footer.tsx**: Footer component

### Context

- **AuthContext.tsx**: Global authentication state management using React Context
  - `isLoggedIn`: Boolean flag for login status
  - `user`: Current user object with name and email
  - `login()`: Login function
  - `signup()`: Signup function
  - `logout()`: Logout function

---

## 💾 Database Schema

### User Schema (MongoDB/Mongoose)

```typescript
{
  _id: ObjectId,
  name: String (required),
  email: String (required, unique),
  password: String (required, bcrypt hashed),
  chats: [
    {
      id: String (UUID, auto-generated),
      role: String ("user" | "assistant"),
      content: String (required),
      _id: ObjectId
    }
  ]
}
```

### Example User Document
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "name": "John Doe",
  "email": "john@example.com",
  "password": "$2b$10$...",
  "chats": [
    {
      "_id": "507f1f77bcf86cd799439012",
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "role": "user",
      "content": "Hello"
    },
    {
      "_id": "507f1f77bcf86cd799439013",
      "id": "550e8400-e29b-41d4-a716-446655440001",
      "role": "assistant",
      "content": "Hi there! How can I help you?"
    }
  ]
}
```

---

## 🔐 Authentication

### How It Works

1. **Signup**: User provides name, email, and password
   - Password is hashed using bcrypt (10 rounds)
   - User document is created in MongoDB
   - JWT token is generated and stored in HTTP-only cookie

2. **Login**: User provides email and password
   - Password is compared with hashed password using bcrypt
   - JWT token is generated for valid credentials
   - Token is stored in HTTP-only signed cookie with 7-day expiration

3. **Token Verification**: All protected routes verify JWT token
   - Token is extracted from signed cookies
   - Token is verified using the JWT_SECRET
   - User ID is extracted from token payload
   - User object is attached to request locals

4. **Logout**: 
   - Cookie is cleared from client
   - Frontend reloads to reset authentication state

### Token Structure
```json
{
  "id": "user_id",
  "email": "user@example.com",
  "iat": 1699000000,
  "exp": 1699604800
}
```

---

## 🐛 Troubleshooting

### Common Issues

#### 1. MongoDB Connection Error
```
Error: Can't Connect To MongoDB
```
**Solution**: 
- Ensure MongoDB is running locally: `mongod`
- Or update `MONGODB_URL` in `.env` to correct connection string
- Check MongoDB Atlas network access if using cloud

#### 2. CORS Error
```
Access to XMLHttpRequest blocked by CORS policy
```
**Solution**:
- Verify `SITE_URL` in backend `.env` matches your frontend URL
- Check CORS configuration in `app.ts`: `cors({ origin: "http://localhost:5173", credentials: true })`

#### 3. JWT Token Error
```
Token Not Recieved / Token Expired
```
**Solution**:
- Clear browser cookies and login again
- Check if `JWT_SECRET` is properly set in `.env`
- Verify token is being sent in HTTP-only cookie

#### 4. OpenRouter API Error
```
Error: Unable to send chat / 401 Unauthorized
```
**Solution**:
- Verify `OPENROUTER_API_KEY` is valid in `.env`
- Check OpenRouter account has available credits
- Ensure API key has proper permissions

#### 5. Port Already in Use
```
Error: listen EADDRINUSE: address already in use :::5000
```
**Solution**:
```powershell
# Find and kill process on port 5000
Get-Process -Id (Get-NetTCPConnection -LocalPort 5000).OwningProcess | Stop-Process -Force

# Or use different port
$env:PORT=5001
npm start
```

#### 6. Package Dependencies Error
```
npm ERR! Unable to resolve dependency
```
**Solution**:
```bash
rm package-lock.json
npm cache clean --force
npm install
```

---

## 📝 Available Scripts

### Backend
- `npm run dev` - Start development server with auto-reload
- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Run production build

### Frontend
- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

---

## 🔄 Development Workflow

1. **Make changes** to either backend or frontend code
2. **TypeScript compilation** happens automatically in dev mode
3. **Hot reload** applies changes without restart
4. **Run tests/lint** before committing (frontend: `npm run lint`)

---

## 📦 Dependencies Overview

### Backend Key Dependencies
- `express`: Web framework
- `mongoose`: MongoDB ORM
- `jsonwebtoken`: JWT authentication
- `bcrypt`: Password hashing
- `express-validator`: Input validation
- `openai`: OpenAI SDK (compatible with OpenRouter)
- `cors`: Cross-origin middleware
- `morgan`: HTTP request logging

### Frontend Key Dependencies
- `react`: UI library
- `react-router-dom`: Client-side routing
- `@mui/material`: UI component library
- `axios`: HTTP client
- `react-hot-toast`: Toast notifications
- `react-syntax-highlighter`: Code highlighting

---

## 🤝 Contributing

To contribute to this project:
1. Create a new branch for your feature
2. Make your changes
3. Ensure code is properly formatted
4. Test thoroughly
5. Submit a pull request

---

## 📄 License

This project is licensed under the ISC License.

---

## 📞 Support

For issues or questions:
- Check the Troubleshooting section above
- Review console logs for error messages
- Verify all environment variables are correctly set
- Ensure backend and frontend are running on correct ports

---
