import React, { Component } from "react";

export default class CalendarForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game: {
        home: "",
        away: "",
        home_score: 0,
        away_score: 0,
        date: "",
        tournament: "",
      },
    };
  }

  handleChange = (event) => {
    this.setState({ game: { home: event.target.value } });
  };

  handleSubmit = (event) => {
    alert("A name was submitted " + this.state.value);
  };

  render() {
    return (
      <React.Fragment>
        <h4 className="border-bottom m-1 p-3 display-5 text-light justify-content-center d-flex">
          Calendar Game
        </h4>
        <form onSubmit={this.handleSubmit}>
          <label>
            Home team:
            <input
              type="text"
              value={this.state.game.home}
              onChange={this.handleChange}
            />
          </label>
          <button className="btn btn-primary" type="button" value="Submit">
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}
