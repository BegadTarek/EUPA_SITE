import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Link } from "react-router-dom";

export default class TeamsAdmin extends Component {
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

  deleteTeam = (selectedTeam) => {
    console.log(selectedTeam);
  };

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
          <td>
            <button
              type="button"
              className="btn"
              data-bs-toggle="modal"
              data-bs-target="#editTeam"
            >
              <FontAwesomeIcon icon="fa-solid fa-user-pen" />
            </button>
          </td>
          <td>
            <button
              id={"delButton" + team.id}
              type="button"
              className="btn"
              value="Delete"
              onClick={() => this.deleteTeam(team.id)}
            >
              <FontAwesomeIcon icon="fa-solid fa-trash-can" />
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <React.Fragment>
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
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>{this.getTeamRow()}</tbody>
            </table>
          </div>
        </div>
        {/* Modal edit*/}
        <div
          className="modal fade"
          id="editTeam"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="editTeamLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="editTeamLabel">
                  Edit
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">...</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Understood
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
