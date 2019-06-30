import React from "react";
import "../index.css";

function TodoItem() {
    return (
        <div className="todo-item">
            <p>
                <input type="checkbox" ></input> <span>first Todo</span>
            </p>
        </div>
    )
};

export default TodoItem;