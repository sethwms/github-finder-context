import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./layout/Navbar";
import Home from "./users/Home";
import Alert from "./layout/Alert";
import About from "./pages/About";
import User from "./users/User";

import GithubState from "../context/github/GithubState";

import "../App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [alert, setAlert] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
    setHasSubmitted(false);
  };

  const showAlert = (msg, type) => {
    setAlert({ msg, type });
  };

  const searchUsers = async (text) => {
    setAlert(null);
    setLoading(true);
    setHasSubmitted(true);

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
      &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    setUsers(res.data.items);
    setLoading(false);
  };

  const getUser = async (login) => {
    setAlert(null);
    setLoading(true);

    const res =
      await axios.get(`https://api.github.com/users/${login}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
    &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    setUser(res.data);
    setLoading(false);
  };

  const getUserRepos = async (login) => {
    setLoading(true);

    const res =
      await axios.get(`https://api.github.com/users/${login}/repos?per_page=30&sort=create:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
    &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    setRepos(res.data);
    setLoading(false);
  };

  return (
    <GithubState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={alert} />
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    searchUsers={searchUsers}
                    clearUsers={clearUsers}
                    showClear={users.length > 0 ? true : false}
                    setAlert={showAlert}
                    loading={loading}
                    users={users}
                    hasSubmitted={hasSubmitted}
                  />
                }
              />
              <Route path="/about" element={<About />} />
              <Route
                path="/user/:login"
                element={
                  <User
                    user={user}
                    getUser={getUser}
                    repos={repos}
                    getUserRepos={getUserRepos}
                  />
                }
              />
            </Routes>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
