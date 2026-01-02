// useState hook import kar rahe hain React se
// useState ka use component ke andar data (state) store karne ke liye hota hai
import { useState } from "react";

// LudoBoard naam ka functional component
export default function LudoBoard() {

  // moves ek state object hai
  // isme har color ke moves ka count store hota hai
  const [moves, setMoves] = useState({
    blue: 0,
    red: 0,
    yellow: 0,
    green: 0,
  });

  // arr ek state array hai
  // isme moves ka history store hoga
  const [arr, setArr] = useState(["no moves yet"]);

  // 🔵 Blue button click hone par
  const updateBlue = () => {
    // moves state update
    setMoves((prevMoves) => ({
      ...prevMoves,
      blue: prevMoves.blue + 1,
    }));

    // ❗ array ko mutate nahi kar rahe
    // new array bana rahe hain with previous values
    setArr((prevArr) => [...prevArr, "Blue moved"]);

    // sirf debugging ke liye
    console.log("Blue move added");
  };

  // 🟡 Yellow button click hone par
  const updateYellow = () => {
    setMoves((prevMoves) => ({
      ...prevMoves,
      yellow: prevMoves.yellow + 1,
    }));

    setArr((prevArr) => [...prevArr, "Yellow moved"]);
  };

  // 🟢 Green button click hone par
  const updateGreen = () => {
    setMoves((prevMoves) => ({
      ...prevMoves,
      green: prevMoves.green + 1,
    }));

    setArr((prevArr) => [...prevArr, "Green moved"]);
  };

  // 🔴 Red button click hone par
  const updateRed = () => {
    setMoves((prevMoves) => ({
      ...prevMoves,
      red: prevMoves.red + 1,
    }));

    setArr((prevArr) => [...prevArr, "Red moved"]);
  };

  // JSX return ho raha hai jo UI me render hoga
  return (
    <div>
      {/* Game heading */}
      <h2>Game Begins</h2>

      <div className="board">
        {/* Blue section */}
        <p>Blue moves = {moves.blue}</p>
        <button
          style={{ backgroundColor: "blue", color: "white" }}
          onClick={updateBlue}
        >
          +1
        </button>

        {/* Yellow section */}
        <p>Yellow moves = {moves.yellow}</p>
        <button
          style={{ backgroundColor: "yellow", color: "black" }}
          onClick={updateYellow}
        >
          +1
        </button>

        {/* Green section */}
        <p>Green moves = {moves.green}</p>
        <button
          style={{ backgroundColor: "green", color: "white" }}
          onClick={updateGreen}
        >
          +1
        </button>

        {/* Red section */}
        <p>Red moves = {moves.red}</p>
        <button
          style={{ backgroundColor: "red", color: "white" }}
          onClick={updateRed}
        >
          +1
        </button>
      </div>

      {/* Moves history section */}
      <h3>Move History</h3>
      <ul>
        {arr.map((move, index) => (
          <li key={index}>{move}</li>
        ))}
      </ul>
    </div>
  );
}
