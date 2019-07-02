import React from "react";

const style = {
  margin: "0 auto",
  textAlign: "center",
  justifyContent: "center",
  fontSize: 50
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.Increase1 = this.Increase1.bind(this)
    this.Decrease1 = this.Decrease1.bind(this)
  }

  Increase1() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    })
  }
  Decrease1() {
    this.setState(prevState => {
      return {
        count: prevState.count - 1
      }
    })
  }

  render() {
    return (
      <div style={style}>
        <h1>{this.state.count}</h1>
        <button onClick={this.Increase1}>Increase by 1</button>
        <button onClick={this.Decrease1}>Decrease by 1</button>
      </div>
    )
  }
}

export default App;
