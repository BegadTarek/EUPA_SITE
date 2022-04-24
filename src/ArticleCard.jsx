import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ArticleCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  isLongArticle = () => {
    if (this.props.longArticle !== "") {
      return (
        <Link to="#" className="btn btn-outline-danger">
          Continue Reading
        </Link>
      );
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={this.props.src}
                className="img-fluid rounded-start"
                alt={this.props.title + " Photo"}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h3 className="card-title">{this.props.title}</h3>
                <p className="card-text">{this.props.paragraph}</p>
                {this.isLongArticle()}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
