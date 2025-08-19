# Chat App - Backend Only

This repository contains the **backend of a chat application** built using **Node.js**, **Express**, and **MongoDB (Mongoose)**. It follows a **MVC architecture** and supports **end-to-end communication** between users.

## 🌟 Features
- **User Authentication**
  - Sign up (`POST /auth/signup`)
  - Login (`POST /auth/login`)
  - Logout (`POST /auth/logout`)
- **Messaging System**
  - Get messages in a chat (`GET /messages/:id`)
  - Send a message to a user (`POST /messages/send/:id`)
  - All message routes are protected with JWT authentication
- **User Management**
  - Fetch users for sidebar or chat list (`GET /users/`) (protected)
- Clean MVC structure with Controllers, Models, Routes, Services, and Middleware

## Project Structure
```

.
├── backend/          # Main backend application
│   ├── controllers/  # API request handlers
│   ├── models/       # Database schemas (Mongoose)
│   ├── routes/       # API route definitions
│   ├── middleware.js # JWT authentication & route protection
│   ├── utils/        # Helper functions
│   └── server.js     # Entry point to start the server
├── db/               # MongoDB database setup or seed scripts
├── node\_modules/     # Node dependencies
├── .env              # Environment variables (ignored in Git)
├── package.json      # Node.js dependencies & scripts
└── package-lock.json # Locked dependencies

````

## Installation
1. Clone the repository:
```bash
git clone https://github.com/leulged/chat-app.git
cd chat-app
````

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables in `.env`:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_jwt_secret
```

4. Start the server:

```bash
npm start
```

## API Endpoints

### Authentication

| Method | Endpoint     | Description         |
| ------ | ------------ | ------------------- |
| POST   | /auth/signup | Register a new user |
| POST   | /auth/login  | Login a user        |
| POST   | /auth/logout | Logout a user       |

### Messages

| Method | Endpoint            | Description                          |
| ------ | ------------------- | ------------------------------------ |
| GET    | /messages/\:id      | Get messages for a chat (protected)  |
| POST   | /messages/send/\:id | Send a message to a user (protected) |

### Users

| Method | Endpoint | Description                              |
| ------ | -------- | ---------------------------------------- |
| GET    | /users/  | Fetch users for chat sidebar (protected) |

> All routes except `/signup` and `/login` require **JWT authentication**.

## Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* dotenv

## Author

**Leul Gedion** – Backend Developer & Full Stack Developer

## License

This repository is for educational purposes and backend project showcase.
