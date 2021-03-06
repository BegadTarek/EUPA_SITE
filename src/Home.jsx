import React, { Component } from "react";
import Carousel from "./Carousel";
import Calendar from "./Calendar";
import Standings from "./Standings";
import FeaturedArticles from "./FeaturedArticles";
import UltiMap from "./UltiMap";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Carousel />
        <Calendar />
        <Standings />
        <FeaturedArticles />
        <UltiMap />
      </React.Fragment>
    );
  }
}
