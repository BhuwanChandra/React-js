
/*
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

*/

/*

import React from "react"
import ReactDOM from "react-dom"

const hStyle = {
    color: "blue",
    fontWeight: "500"
};
const pStyle = {
    color: "red",
    fontSize: "20px"
};
const liStyle = {
    color: "brown",
    fontSize: "15px"
}

function MyInfo() {
    return (
        <div>
            <h1 style={hStyle}> Bhuwan Chandra</h1>
            <p style={pStyle} >I am a college student. Currently i am taking the React js course on scrimba.com </p>
            <ol style={liStyle} >
                <li>I'd like to visit Goa</li>
                <li>then I'd like to visit Shimla</li>
                <li>finally I want to visit Kerela</li>
            </ol>
        </div>
    )
}


ReactDOM.render(<MyInfo />, document.getElementById("root"));


*/


/*

import React from "react"
import ReactDOM from "react-dom"

import MyInfo from "./components/MyInfo.js"


ReactDOM.render(<MyInfo />, document.getElementById("root"));

*/


import React from "react"
import ReactDOM from "react-dom"

import App from "./App.js"


ReactDOM.render(<App />, document.getElementById("root"));

