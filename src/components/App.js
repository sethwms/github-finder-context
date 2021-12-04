import React, { Component } from "react";
import axios from "axios";

import Navbar from "./layout/Navbar";
import Users from "./users/Users";
import Search from "./users/Search";
import Alert from "./layout/Alert";

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

  render() {
    const {
      state: { alert, users, loading, hasSubmitted },
      searchUsers,
      clearUsers,
      setAlert,
    } = this;
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Alert alert={alert} />
          <Search
            searchUsers={searchUsers}
            clearUsers={clearUsers}
            showClear={users.length > 0 ? true : false}
            setAlert={setAlert}
          />
          <Users loading={loading} users={users} hasSubmitted={hasSubmitted} />
        </div>
      </div>
    );
  }
}

export default App;
