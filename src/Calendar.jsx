import React, { Component } from "react";
import GameCard from "./GameCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/bundle";
import "./css/calendar.css";

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scheduledGames: [],
      teams: [],
      options: {
        slidesPerView: "auto",
        spaceBetween: 30,
        freeMode: true,
        modules: [FreeMode],
      },
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
    this.setState({ scheduledGames: games.reverse() });

    //fetch teams db
    const res2 = await fetch(
      "https://eupa-api.000webhostapp.com/api/read_teams.php",
      { method: "GET" }
    );
    const teamsRes = await res2.json();
    this.setState({ teams: teamsRes });
  };

  getScheduledGames = () => {
    return this.state.scheduledGames.map((game, i) => {
      return (
        <SwiperSlide key={"Match card " + i} className="flex-shrink-1">
          <GameCard
            home={game.home}
            away={game.away}
            date={game.date}
            homeScore={game.home_score}
            awayScore={game.away_score}
            tournament={game.tournament}
          />
        </SwiperSlide>
      );
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="container-fluid">
          <div className="row">
            <div className="d-flex justify-content-center display-5 text-light p-3">
              Season Schedule
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <Swiper {...this.state.options} style={{ flexShrink: 1 }}>
            {this.getScheduledGames()}
          </Swiper>
        </div>
      </div>
    );
  }
}
