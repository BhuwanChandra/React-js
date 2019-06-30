import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// these are called functional components 
function MyApp(){
    return (
        <div>
            <h1>This is the Home Page</h1>
            <ul>
                <li>First Item</li>
                <li>Second Item</li>
                <li>Third Item</li>
            </ul>
        </div>
    )
}


ReactDOM.render(<MyApp/>, document.getElementById("root"));

