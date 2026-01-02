// App.css ko import kar rahe hain
// Is file me App component ki styling hoti hai
import "./App.css";

// LudoBoard component import
// (abhi use nahi ho raha, isliye sirf reference ke liye hai)
import LudoBoard from "./LudoBoard";

// TodoList component import
// Ye component screen par Todo UI show karega
import TodoList from "./TodoList";


import LotteryGame from "./LotteryGame";


// App main/root component hai
// Ye decide karta hai ki screen par kya render hoga
function App() {
  return (
    <>
      {/* Abhi sirf TodoList render kar rahe hain */}
      {/* LudoBoard ko baad me use kar sakte hain */}
      <LotteryGame />
    </>
  );
}

// App component ko export kar rahe hain
// main.jsx yahin se App ko render karta hai
export default App;
