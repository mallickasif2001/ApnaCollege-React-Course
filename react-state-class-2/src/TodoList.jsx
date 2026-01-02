import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {

    // 🟢 All todos state
    const [todos, setTodos] = useState([{ id: uuidv4(), text: "Sample Task", done: false }]);

    // 🟢 Input state
    const [newTodo, setNewTodo] = useState("");

    // 🟢 Add new task
    const addNewTask = () => {
        if (newTodo.trim() === "") return;

        setTodos([
            ...todos,
            { id: uuidv4(), text: newTodo, done: false }
        ]);
        setNewTodo("");
    };

    // 🟢 Delete single task
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    // 🟢 Toggle single task done / undo
    const toggleDone = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id
                    ? { ...todo, done: !todo.done }
                    : todo
            )
        );
    };

    // 🟢 MARK ALL TASKS AS DONE
    const markAllDone = () => {
        setTodos(
            todos.map((todo) => ({
                ...todo,
                done: true
            }))
        );
    };

    return (
        <div>
            <input
                placeholder="add a task"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
            />

            <br /><br />

            <button onClick={addNewTask}>Add Task</button>

            <br /><br />

            {/* ✅ ALL DONE BUTTON */}
            <button onClick={markAllDone}>
                Mark All Done
            </button>

            <br /><br />
            <hr />

            <h4>Tasks Todo</h4>

            <ul>
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        style={{
                            marginBottom: "8px",
                            textDecoration: todo.done ? "line-through" : "none",
                            color: todo.done ? "gray" : "black",
                        }}
                    >
                        <span>{todo.text}</span>

                        <button
                            onClick={() => toggleDone(todo.id)}
                            style={{ marginLeft: "10px" }}
                        >
                            {todo.done ? "Undo" : "Done"}
                        </button>

                        <button
                            onClick={() => deleteTodo(todo.id)}
                            style={{ marginLeft: "8px" }}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
