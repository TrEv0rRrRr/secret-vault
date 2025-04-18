# 🔐 Secret Vault

**Secret Vault** is a simple React + TypeScript app where users can securely store their secrets — but only if they're authenticated!

This project is part of my personal learning journey to improve my skills with **Firebase authentication**, **React context**, **custom hooks**, and **clean architecture**.

---

## 🚀 Tech Stack

- **React** (with Vite)
- **TypeScript**
- **Firebase Auth** (email & password login)
- **Tailwind CSS** for styling
- `crypto.randomUUID()` for secure ID generation

---

## 🧩 Core Features

- User sign-up and login
- Save and display personal secrets (stored in memory)
- Real-time form validation with feedback
- Remove individual secrets
- Fun dynamic placeholders that change over time
- Conditional UI based on auth state (only logged-in users can see the vault)

---

## ✨ Future Improvements

- Connect to Firebase Firestore or another backend to persist secrets
- Associate secrets with each user
- Add timestamps to secrets
- Add smooth animations using Framer Motion
- Add tests for form and user interactions (with Vitest or Testing Library)

---

## ⚙️ Getting Started

```bash
pnpm install
pnpm run dev
```
