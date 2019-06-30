import React from "react"

const divStyle = {
  width: "600px",
  padding: "40px"
}
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
    <div style={divStyle} >
      <h1 style={hStyle}> Bhuwan Chandra</h1>
      <p style={pStyle}>
        I am a college student. Currently i am taking the React js course on
        scrimba.com{" "}
      </p>
      <ol style={liStyle}>
        <li>I'd like to visit Goa</li>
        <li>then I'd like to visit Shimla</li>
        <li>finally I want to visit Kerela</li>
      </ol>
    </div>
  );
}


export default MyInfo

