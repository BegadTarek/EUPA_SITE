import React, { Component } from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import NoMatchPage from "./NoMatchPage";
import AdminHub from "./Admin/AdminHub";
import CarouselAdmin from "./Admin/CarouselAdmin";
import CalendarAdmin from "./Admin/CalendarAdmin";
import CalendarForm from "./Admin/CalendarForm";
import ArticlesAdmin from "./Admin/ArticlesAdmin";
import TeamsAdmin from "./Admin/TeamsAdmin";
// import StandingsAdmin from "./Admin/StandingsAdmin";
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
            <Route path="/admin/carousel" element={<CarouselAdmin />} />
            <Route path="/admin/calendar" element={<CalendarAdmin />} />
            <Route path="/admin/calendar/addGame" element={<CalendarForm />} />
            <Route path="/admin/calendar/editGame" element={<CalendarForm />} />
            <Route path="/admin/articles" element={<ArticlesAdmin />} />
            <Route path="/admin/teams" element={<TeamsAdmin />} />
            {/* <Route path="/admin/standings" element={<StandingsAdmin />} /> */}
            <Route path="*" element={<NoMatchPage />} />
          </Routes>
          <Footer />
        </Router>
      </React.Fragment>
    );
  }
}
