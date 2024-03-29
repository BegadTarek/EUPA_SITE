import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default class AdminHub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      striped: true,
      bordered: false,
      hover: true,
    };
  }

  render() {
    return (
      <Container className="mt-2">
        <Row xs={1} md={2}>
          <Col>
            <Link className="btn btn-dark w-100 p-3" to={"/admin/carousel"}>
              <FontAwesomeIcon icon="fa-solid fa-images" /> Main Carousel
            </Link>
          </Col>
          <Col>
            <Link className="btn btn-dark w-100 p-3" to={"/admin/calendar"}>
              <FontAwesomeIcon icon="fa-solid fa-calendar" /> Calendar
            </Link>
          </Col>
        </Row>
        <Row xs={1} md={2} className="mt-3">
          <Col>
            <Link className="btn btn-dark w-100 p-3" to={"/admin/articles"}>
              <FontAwesomeIcon icon="fa-solid fa-newspaper" /> Featured Articles
            </Link>
          </Col>
          <Col>
            <Link className="btn btn-dark w-100 p-3" to={"/admin/teams"}>
              <FontAwesomeIcon icon="fa-solid fa-user-group" /> Teams Database
            </Link>
          </Col>
          {/* <Col>
            <Link className="btn btn-dark w-100 p-3" to={"/admin/standings"}>
              <FontAwesomeIcon icon="fa-solid fa-table-cells" /> League
              Standings
            </Link>
          </Col> */}
        </Row>
      </Container>
    );
  }
}
