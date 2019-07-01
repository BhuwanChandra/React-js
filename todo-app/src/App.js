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
      todoitems: todosData.map(item => <TodoItem key={item.id} todo={item} />)
    }
  }
  render(){
    return (
      <div className="todo-list">
        {this.state.todoitems}
      </div>
    )
  }
}
 
export default App;