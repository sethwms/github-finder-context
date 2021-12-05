import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./layout/Navbar";
import Home from "./users/Home";
import Alert from "./layout/Alert";
import About from "./pages/About";
import User from "./users/User";

import "../App.css";

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
    hasSubmitted: false,
  };

  clearUsers = () => {
    this.setState({
      alert: null,
      users: [],
      user: null,
      repos: [],
      loading: false,
      hasSubmitted: false,
    });
  };

  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
  };

  searchUsers = async (text) => {
    this.setState({ alert: null, loading: true, hasSubmitted: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
      &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ users: res.data.items, loading: false });
  };

  getUser = async (login) => {
    this.setState({ alert: null, loading: true });

    const res =
      await axios.get(`https://api.github.com/users/${login}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
    &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ user: res.data, loading: false });
  };

  getUserRepos = async (login) => {
    this.setState({ loading: true });

    const res =
      await axios.get(`https://api.github.com/users/${login}/repos?per_page=30&sort=create:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
    &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ repos: res.data, loading: false });
  };

  render() {
    const {
      state: { alert, loading, users, hasSubmitted, user, repos },
      clearUsers,
      setAlert,
      searchUsers,
      getUser,
      getUserRepos,
    } = this;
    return (
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
                    setAlert={setAlert}
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
    );
  }
}

export default App;
