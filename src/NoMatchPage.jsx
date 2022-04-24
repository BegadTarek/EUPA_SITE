import React, { Component } from "react";

export default class NoMatchPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="mt-5">
        <h1 className="text-center">Go home, you're drunk</h1>
      </div>
    );
  }
}
