import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./layout/Navbar";
import Home from "./users/Home";
import Alert from "./layout/Alert";
import About from "./pages/About";
import User from "./users/User";
import NotFound from "./pages/NotFound";
import Footer from "./layout/Footer";

import AppState from "../context/AppState";

import "../App.css";

const App = () => {
  return (
    <AppState>
      <Router>
        <div className="App">
          <Navbar />
          <div
            className="container"
            style={{ minHeight: "72vh", maxHeight: "auto" }}
          >
            <Alert />
            <Routes>
              <Route path="*" element={<NotFound />} />
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/user/:login" element={<User />} />
            </Routes>
          </div>
        </div>
      </Router>
      <Footer />
    </AppState>
  );
};

export default App;
