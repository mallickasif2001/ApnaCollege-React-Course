# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.





## 🎰 Lottery Game (React)

A simple and interactive Lottery Game built using **React**.
The app generates a 3-digit lottery ticket and checks whether the sum of digits equals **15**. If yes, the user wins; otherwise, they can try again.

---

## 📌 Features

* Generates a random 3-digit lottery ticket
* Automatically calculates the sum of digits
* Winning condition: sum must be exactly **15**
* Displays clear **Win** or **Lose** message
* Clean UI with separate CSS file
* Uses React Hooks (`useState`)

---

## 🛠️ Tech Stack

* React (Functional Components)
* JavaScript (ES6)
* CSS

---

## 📂 Project Structure

```
src/
│── LotteryGame.jsx
│── LotteryGame.css
│── App.jsx
│── index.js
```

---

## 🚀 How It Works

1. User clicks on **Generate Ticket**
2. App generates 3 random digits (0–9)
3. Sum of digits is calculated
4. If sum === 15 → 🎉 You Won
5. Else → ❌ Try Again

All logic runs instantly using React state updates.

---

## ▶️ How to Run the Project

1. Clone the repository

   ```
   git clone <your-repo-link>
   ```

2. Go to project folder

   ```
   cd lottery-game
   ```

3. Install dependencies

   ```
   npm install
   ```

4. Start the app

   ```
   npm start
   ```

---

## 🧠 Learning Concepts Used

* React Functional Components
* `useState` hook
* Event handling (`onClick`)
* Conditional rendering
* Array methods (`map`, `reduce`)
* Basic game logic

---

## 📸 Preview

🎰 Lottery ticket with 3 digits
📊 Sum calculation
🏆 Instant result message

---

## ✨ Future Improvements (Optional)

* Add animations on win
* Add sound effects
* Track number of attempts
* Improve UI with Tailwind or Material UI

---

## 👤 Author

**Md Asif**
MCA Student | Frontend Developer Aspirant

---