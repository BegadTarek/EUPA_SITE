import React, { Component } from "react";
import "./css/standings.css";

export default class Standings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [],
    };
  }

  componentDidMount = async () => {
    const response = await fetch(
      "https://eupa-api.000webhostapp.com/api/read_teams.php",
      { method: "GET" }
    );
    const teamsData = await response.json();
    this.setState({ teams: teamsData });
  };

  //laying team data into table
  getTeamRow = () => {
    return this.state.teams.map((team) => {
      return (
        <tr key={team.id}>
          <td>{team.id}</td>
          <td>
            <img src={team.logoSrc} alt={team.name + " logo"} />
          </td>
          <td>{team.acronym}</td>
          <td>{team.points}</td>
          <td>{team.win}</td>
          <td>{team.tie}</td>
          <td>{team.loss}</td>
          <td>{team.pf}</td>
          <td>{team.pa}</td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div>
        <h4 className="border-bottom m-1 p-3 display-5 text-light justify-content-center d-flex">
          League Standings
        </h4>
        <div className="p-3">
          <table className="table table-light table-striped">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Logo</th>
                <th>Name</th>
                <th>P</th>
                <th>W</th>
                <th>T</th>
                <th>L</th>
                <th>PF</th>
                <th>PA</th>
              </tr>
            </thead>
            <tbody>{this.getTeamRow()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
