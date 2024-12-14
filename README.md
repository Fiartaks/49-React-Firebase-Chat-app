# 💬 Chat Application

## 📖 Project Overview
🌍 This Chat Application provides users with a seamless platform to communicate in real-time through various chat rooms. Built with **React** and integrated with Firebase for authentication and real-time database capabilities, this application offers a modern chat experience with Google authentication and individual chat rooms.

## 📸 Screenshots 📸

![chat.gif](https://github.com/Fiartaks/49-React-Firebase-Chat-app/blob/main/chat/public/chat.gif)


## 💻 What’s in the Project?
- 🌟 **Main Component (App.js)**: The core entry point of the application that manages authentication and room selection logic.  
- 📑 **Authentication Page (AuthPage.js)**: Manages user authentication using Google Sign-In with Firebase.  
- 📜 **Room Selection Page (RoomPage.js)**: Allows users to input and select a room to join for chatting.  
- 💬 **Chat Page (ChatPage.js)**: The main interface for messaging within a selected room.  
- 📰 **Message Component (Message.js)**: Displays individual messages, differentiating between user and non-user messages.  
- 🗄️ **Firebase Configuration**: Sets up Firebase for authentication and Firestore for real-time data storage.

## 🏗️ MVC Characteristics

### 1. Model
- **Data Management**: Firebase Firestore acts as the model, storing chat messages and maintaining user and room data.
- **Authentication and Persistence**: Manages user sessions and authentication states using Firebase Auth.

### 2. View
- **User Interface**: Components like AuthPage, RoomPage, and ChatPage present users with a responsive and interactive UI.
- **Styling**: Implemented using SCSS for modern design, providing visual coherence across the application.

### 3. Controller
- **Business Logic**: Controllers such as App.js and Firebase hooks manage user authentication and chat functionality. They facilitate the flow of chat messages and user navigation between pages.
- **Real-Time Updates**: ChatPage.js utilizes Firebase's snapshot feature to listen for real-time message updates and display them instantly.

## 🛠️ What Has Been Done in the Project?
- 🔄 Implemented real-time messaging with Firebase Firestore.  
- ✅ Integrated Google Sign-In for seamless authentication.  
- 🏢 Provided multiple room functionality to separate conversation threads.  
- 🎨 Styled the application for an engaging user experience.

## 📦 Libraries
- 📘 React  
- 🔥 Firebase  
- 🌐 React Router  
- 🎨 SCSS  
