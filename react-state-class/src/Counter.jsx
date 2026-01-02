import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);    //initilization
    console.log("Component is rendered!");
    console.log(`count =  ${count}`);

    const incCount = () => {
        setCount(count + 1);
        console.log(`inside incCount, count = ${count}`);
    };

    return (
        <div>
            <h2>Count = {count}</h2>
            <button onClick={incCount}>Increase Count</button>
        </div>
    );
}
