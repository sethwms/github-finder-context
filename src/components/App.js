import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./layout/Navbar";
import Home from "./users/Home";
import Alert from "./layout/Alert";
import About from "./pages/About";
import User from "./users/User";

import GithubState from "../context/github/GithubState";

import "../App.css";

const App = () => {
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({ msg, type });
  };

  return (
    <GithubState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={alert} />
            <Routes>
              <Route path="/" element={<Home setAlert={showAlert} />} />
              <Route path="/about" element={<About />} />
              <Route path="/user/:login" element={<User />} />
            </Routes>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
