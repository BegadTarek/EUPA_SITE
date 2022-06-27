import React, { Component } from "react";
import "./css/carousel.css";

export default class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: "",
      title: "",
      paragraph: "",
      alt: "",
    };
  }

  render() {
    return (
      <div>
        <img src={this.props.src} alt={this.props.alt} />
        <div className="carousel-caption bg-dark bg-gradient bg-opacity-25 px-2 ">
          <h2>{this.props.title}</h2>
          <p>{this.props.paragraph}</p>
        </div>
      </div>
    );
  }
}
