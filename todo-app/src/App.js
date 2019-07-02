import React from "react";
import TodoItem from "./components/TodoItem";
import "./index.css";
import todosData from "./components/todosData";

/*

FUNCTION BASED COMPONENT

function App() {
  const todoItems = todosData.map(todo => <TodoItem key={todo.id} todo={todo} />)
  return (
    <div className="todo-list">
      {todoItems}
    </div>
   )
};

*/

// CLASS BASED COMPONENT

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    // Update state so that the item with the given id flips `completed` from false to true (or vise versa)
    this.setState(prevState => {
      const myObject = Object.assign({},prevState);
      return {
        todos: myObject.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo
      })}
    });
  };

  render(){

    const todoItems = this.state.todos.map(item => <TodoItem onClick={this.handleChange} key={item.id} todo={item} />);
    
    return (
      <div className="todo-list">
        {todoItems}
      </div>
    )
  }
}
 
export default App;