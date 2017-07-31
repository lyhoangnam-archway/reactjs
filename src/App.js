import React, { Component } from "react";
import Status from "./components/status";
import "./styles/app.scss";

class App extends Component {
  state = {
    count: 0
  };

  handleClick() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <div className="status-lists">
        <button onClick={this.handleClick.bind(this)}>CLick</button>
        <Status status="ádas" like={3} count={this.state.count} />
        <Status status="ádas" like={3} count={this.state.count} />
        <Status status="ádas" like={3} count={this.state.count} />
      </div>
    );
  }
}

export default App;
