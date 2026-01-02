// React se useState hook import kiya
// useState component ke andar data (state) ko store aur update karne ke kaam aata hai
import { useState } from "react";

// LotteryGame ka CSS file import kiya styling ke liye
import "./LotteryGame.css";

// Functional component start
export default function LotteryGame() {

    // ticket state: 3 random digits store karega
    // initially empty array rakha gaya hai
    const [ticket, setTicket] = useState([]);

    // result state: win ya lose ka result store karega
    // initially empty string
    const [result, setResult] = useState("");

    // Ye function tab call hoga jab user "Generate Ticket" button pe click karega
    const generateTicket = () => {

        // 3 random digits generate kiye gaye (0 se 9 ke beech)
        // Math.random() random number deta hai
        // Math.floor decimal hata deta hai
        const digits = [
            Math.floor(Math.random() * 10),
            Math.floor(Math.random() * 10),
            Math.floor(Math.random() * 10),
        ];

        // generated digits ko ticket state me save kar diya
        setTicket(digits);

        // digits ka sum nikal rahe hain
        // reduce function array ke sab elements ko add karta hai
        const sum = digits.reduce((s, n) => s + n, 0);

        // agar sum exactly 15 hua to win
        if (sum === 15) {
            setResult("win");
        } 
        // warna lose
        else {
            setResult("lose");
        }
    };

    // JSX return: UI ka structure
    return (
        <div className="lottery-container">

            {/* Game ka title */}
            <h1 className="title">🎰 Lottery Game</h1>

            {/* Button: click hone par generateTicket function chalega */}
            <button className="generate-btn" onClick={generateTicket}>
                Generate Ticket
            </button>

            {/* 
               Ticket tabhi dikhayenge jab ticket empty na ho
               matlab button click ho chuka ho
            */}
            {ticket.length > 0 && (
                <>
                    {/* Ticket display box */}
                    <div className="ticket">

                        {/* 
                           ticket array ke har digit ko map karke show kar rahe hain
                           index ko key ke roop me use kiya
                        */}
                        {ticket.map((num, index) => (
                            <div key={index} className="digit">
                                {num}
                            </div>
                        ))}
                    </div>

                    {/* Ticket ke digits ka total sum dikhaya */}
                    <p className="sum">
                        Sum = {ticket.reduce((s, n) => s + n, 0)}
                    </p>

                    {/* Agar result "win" hai to winning message */}
                    {result === "win" && (
                        <p className="result win">
                            🎉 Congrats, You Won the Lottery!
                        </p>
                    )}

                    {/* Agar result "lose" hai to losing message */}
                    {result === "lose" && (
                        <p className="result lose">
                            ❌ Sorry, Try Again
                        </p>
                    )}
                </>
            )}
        </div>
    );
}
