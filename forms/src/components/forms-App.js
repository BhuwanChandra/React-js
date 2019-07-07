import React from "react";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      isFriendly: false,
      gender: "",
      favColor: "blue"
    };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const {name, value, type, checked} = event.target;
    type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
  }

  handleSubmit(){

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
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

          <br/>
          <label>
            Your Feedback:
            <br/>
            <textarea 
            value="some default value"
            onChange={this.handleChange}
            />
          </label>

          <br/>
          <label>
            <input
            type="checkbox"
            name="isFriendly"
            checked={this.state.isFriendly}
            onChange={this.handleChange}
            />
            Is Friendly?
          </label>

          <br />
          Gender:
          <br/>
          <label> 
            <input
            type="radio"
            name="gender"
            value="male"
            checked={this.state.gender === "male"}
            onChange={this.handleChange}
            /> Male
          </label>
          <br/>
          <label>
            <input
            type="radio"
            name="gender"
            value="female"
            checked={this.state.gender === "female"}
            onChange={this.handleChange}
            /> Female
          </label>

          <br/>
          <label>
            Favourite Color:
            <br/>
            <select
              value={this.state.favColor}
              onChange={this.handleChange}
              name="favColor"
            >
              <option value="blue">blue</option>
              <option value="yellow">yellow</option>
              <option value="green">green</option>
              <option value="red">red</option>
            </select>
          </label>

          <br/>
          <button>Submit</button>
        </form>
        <h3>Hello {this.state.firstName} {this.state.lastName}!</h3>
        <h3>You are a {this.state.gender} </h3>
        <h3>You favourite color is {this.state.favColor} </h3>
      </div>
    )
  }
}

export default App;
