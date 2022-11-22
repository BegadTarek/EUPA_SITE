import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default class CalendarAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scheduledGames: [],
    };
  }

  componentDidMount = async () => {
    //fetch scheduled games from db
    const response = await fetch(
      "https://eupa-api.000webhostapp.com/api/read_scheduled_games.php",
      {
        method: "GET",
      }
    );
    const games = await response.json();
    this.setState({ scheduledGames: games });
  };

  deleteGame = (selectedGame) => {
    console.log(selectedGame);
  };

  getGameRow = () => {
    return this.state.scheduledGames.map((game) => {
      return (
        <tr key={game.id}>
          <td>{game.id}</td>
          <td>{game.home}</td>
          <td>{game.away}</td>
          <td>
            {game.home_score} - {game.away_score}
          </td>
          <td>{game.date}</td>
          <td>{game.tournament}</td>
          <td>
            <Link className="btn" to={"/admin/calendar/editgame/:id"}>
              <FontAwesomeIcon icon="fa-solid fa-user-pen" />
            </Link>
          </td>
          <td>
            <button
              id={"delButton" + game.id}
              type="button"
              className="btn"
              value="Delete"
              onClick={() => this.deleteGame(game.id)}
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
      <div>
        <h4 className="border-bottom m-1 p-3 display-5 text-light justify-content-center d-flex">
          Scheduled Games
        </h4>
        <div className="p-3">
          <table className="table table-light table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Home</th>
                <th>Away</th>
                <th>Score</th>
                <th>Date</th>
                <th>Tournament</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>{this.getGameRow()}</tbody>
          </table>
        </div>
        {/* Modal edit*/}
        <div
          className="modal fade"
          id="editGame"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="editGameLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="editGameLabel">
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
      </div>
    );
  }
}
