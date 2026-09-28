# 🚀 Shashwat's Portfolio

Welcome to my personal portfolio — a unique blend of terminal-style interface and interactive chatbot experience. Whether you're a tech-savvy explorer or someone who loves a good conversation, there's something here for you.

🌐 **Live Demo**: [https://shashwatssp.vercel.app/](https://shashwatssp.vercel.app/)

---

## 🧩 Features

### 🖥 Terminal Mode
- Feel the nostalgia of the command line.
- Navigate through my work and journey with familiar commands.
- Perfect for devs who love the old-school vibe.

### 🤖 Chatbot Mode
- Have a friendly chat with a smart assistant.
- Ask questions, explore my projects, or just say hi!
- Designed for ease and interactive browsing.

### 🌗 Dark & Light Mode
- Switch between a soothing dark theme and a crisp light mode.
- Let your eyes choose what they love most.

---

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **Chatbot**: Google Gemini API (server-side API route — your key never reaches the browser)
- **Deployment**: Vercel

---

## ⚙️ Local Setup

```bash
# 1. Install dependencies (pnpm recommended; npm works too)
pnpm install

# 2. Create your .env file (copy the template)
cp .env.example .env

# 3. Add your Gemini API key to .env — get one free at https://aistudio.google.com/apikey
#    GEMINI_API_KEY=your_key_here

# 4. Start the dev server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) and try the chatbot mode.

> **Note:** The API key is only read server-side (`GEMINI_API_KEY` in `.env`), and `.env` is git-ignored.
> On Vercel, add `GEMINI_API_KEY` in Project Settings → Environment Variables.

---

## 📫 Connect with Me

- 💼 [LinkedIn](https://www.linkedin.com/in/shashwatssp/)
- 📧 Email: shashwtssp@gmail.com

---

Feel free to explore, interact, and leave feedback. Thanks for visiting!

> _“Simplicity is the soul of efficiency.” – Austin Freeman_
