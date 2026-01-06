import { useState, useEffect } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    const incCount = () => {
        setCount((currCount) => currCount + 1);
    };

    useEffect(function sideEffect() {
        console.log("this is the side effect");
    });

    return (
        <div>
            <h1>Count = {count}</h1>
            <button onClick={incCount}>+1</button>
        </div>
    );
}
