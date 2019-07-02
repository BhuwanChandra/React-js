import React from "react";
import "../index.css";

/*

function TodoItem(props) {
    return (
        <div className="todo-item">
            <p>
                <input type="checkbox" checked={props.todo.completed}></input>
                <span>{props.todo.text}</span>
            </p>
        </div>
    )
};

*/

class TodoItem extends React.Component{
    render(){
        return (
            <div className="todo-item">
                <p>
                    <input onChange={() => { this.props.onClick(this.props.todo.id); }} type="checkbox" checked={this.props.todo.completed}></input>
                    <span>{this.props.todo.text}</span>
                </p>
            </div>
        ) 
    }
}

export default TodoItem;