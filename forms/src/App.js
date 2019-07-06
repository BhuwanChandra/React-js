import React from "react";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: ""
    };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div>
        <form>
          <label>
            first name:
            <input 
            type="text"
            name="firstName"
            value={this.state.firstName}
            placeholder="First Name"
            onChange={this.handleChange}
            />
          </label>
          <label>
            last name:
            <input 
            type="text"
            name="lastName"
            value={this.state.lastName}
            placeholder="Last Name"
            onChange={this.handleChange}
            />
          </label>
        </form>
        <h3>First Name :  {this.state.firstName} </h3>
        <h3>Last Name :  {this.state.lastName} </h3>
      </div>
    )
  }
}

export default App;
