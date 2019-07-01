import React from "react";
import Joke from "./components/Joke";
import JokeData from "./components/JokeData";
import "./index.css";


function App() {
  const JokeComponents = JokeData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />);
  return (
    <div className="contacts">
      {JokeComponents}
    </div>
   )
};
 
export default App;