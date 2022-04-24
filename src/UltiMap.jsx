import React, { Component } from "react";

export default class UltiMap extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <u>
            <h3 className="display-4 text-white d-flex justify-content-center p-3">
              Find Ultimate in Egypt
            </h3>
          </u>
        </div>
        <div className="row d-flex justify-content-center">
          <iframe
            title="UltiMap"
            src="https://www.google.com/maps/d/embed?mid=1d_4S0U08G6GAS-ijm43RjdojPVj3cZzS&ehbc=2E312F"
            height="480"
          ></iframe>
        </div>
      </div>
    );
  }
}
