# AI-Powered Lesson Planner

## Introduction
Welcome to **AI-Powered Lesson Planner**, an intelligent tool designed to assist educators in generating lesson plans efficiently. This application leverages **Google Gemini API** to create dynamic lesson content based on user input, ensuring a seamless and intuitive experience. 

## Features

### 1️⃣ Lesson Planning with AI
- Generate structured lesson plans based on input criteria.
- Customize prompts to fine-tune AI-generated content.
- Download lesson plans as **PDFs** for easy sharing.

### 2️⃣ User Authentication
- Implemented a **dummy authentication** system for user logins.

### 3️⃣ AI-Powered Content Generation
- Uses **Google Gemini API (free version)** to generate lesson content dynamically.

### 4️⃣ Interactive UI
- Built using **ShadCN UI components** for a modern and responsive user interface.

### 5️⃣ Export & Save
- Download lesson plans in **PDF format** for future reference.

## Technologies Used
- **React.js (Next.js)** – Frontend framework for building the application.
- **Google Gemini API** – AI-powered lesson content generation.
- **ShadCN UI** – UI components for a seamless user experience.
- **Tailwind CSS** – Modern styling framework for responsiveness.

## Environment Variables
Ensure you configure the following environment variables in your `.env.local` file. Replace the placeholder values with your actual credentials:
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_NEON_DATABASE_URL=your_neon_database_url
NEXT_PUBLIC_GOOGLE_GEMINI_KEY=your_google_gemini_key
```

## Getting Started

### Prerequisites
Ensure you have the following installed:
- **Node.js** (Latest LTS version recommended)
- **npm** or **yarn** package manager

### Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Satyam-Mishra-1/AI-Powered-Lesson-Planner.git
   ```
2. **Navigate to the Project Directory**:
   ```bash
   cd AI-Powered-Lesson-Planner
   ```
3. **Install Dependencies**:
   ```bash
   npm install
   ```
4. **Start the Development Server**:
   ```bash
   npm run dev
   ```

## Live Preview
The project will be deployed soon. Stay tuned for updates!

## Disclaimer
The creator of this application is not responsible for any incorrect content generated, as the functionality of the **Google Gemini API** is beyond the creator's control.

---
📌 **Developed by Satyam Mishra** | [GitHub Repository](https://github.com/Satyam-Mishra-1/AI-Powered-Lesson-Planner) 🚀

