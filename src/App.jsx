import React, { Component } from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import NoMatchPage from "./NoMatchPage";
import AdminHub from "./AdminHub";
import Footer from "./Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<AdminHub />} />

            <Route path="*" element={<NoMatchPage />} />
          </Routes>
          <Footer />
        </Router>
      </React.Fragment>
    );
  }
}
