function handleClick(event) {
    console.log("Hello");
    console.log(event); 
}

function handleMouseOver() {
    console.log("bye!");
}

function handleDblClick() {
    console.log("you double clicked");
}

export default function Button() {
    return (
        <div>
            <button onClick={handleClick}>Click</button>

            <p onMouseOver={handleMouseOver}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Magnam nemo dignissimos quas neque rerum ducimus voluptatum vel quisquam.
                Odio voluptas eveniet ea consequuntur! Quaerat quasi sint modi. Aliquid, atque quidem.
            </p>

            <button onDoubleClick={handleDblClick}>
                Double Click Me
            </button>
        </div>
    );
}
