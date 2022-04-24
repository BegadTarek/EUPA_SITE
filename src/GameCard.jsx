import React, { Component } from "react";

export default class GameCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      home: "",
      away: "",
      date: "",
      homeScore: "",
      awayScore: "",
      tournament: "",
    };
  }

  getScore = () => {
    if (this.props.homeScore === 0 && this.props.awayScore === 0) {
      return " - ";
    } else {
      return this.props.homeScore + " - " + this.props.awayScore;
    }
  };

  render() {
    return (
      <div className="card text-center widget-card">
        <div className="card-header">{this.props.tournament}</div>
        <div className="card-body">
          <div className="row">
            <div className="col-4 widget-team-name">{this.props.home}</div>
            <div className="col-4 rounded-pill bg-secondary">
              <span className="align-middle widget-score">
                {this.getScore()}
              </span>
            </div>
            <div className="col-4 widget-team-name">{this.props.away}</div>
          </div>
        </div>
        <div className="card-footer text-muted">{this.props.date}</div>
      </div>
    );
  }
}
