import React, { useReducer } from "react";
import axios from "axios";

import AppContext from "./AppContext";
import AppReducer from "./AppReducer";

import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
  SET_HAS_SUBMITTED,
  SET_ALERT,
  REMOVE_ALERT,
} from "./types";

let githubClientID;
let githubClientSercret;

if (process.env.NODE_ENV !== "production") {
  githubClientID = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSercret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientID = process.env.GITHUB_CLIENT_ID;
  githubClientSercret = process.env.GITHUB_CLIENT_SECRET;
}

const AppState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    alert: null,
    loading: false,
    hasSubmitted: false,
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  //SEARCH USER
  const searchUsers = async (text) => {
    removeAlert();
    setLoading();
    setHasSubmitted();

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${githubClientID}
      &client_secret=${githubClientSercret}`
    );

    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items,
    });
  };

  //GET USER
  const getUser = async (login) => {
    setLoading();
    setHasSubmitted();

    const res = await axios.get(
      `https://api.github.com/users/${login}?client_id=${githubClientID}
        &client_secret=${githubClientSercret}`
    );

    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  };

  //SET HAS SUBMITTED
  const setHasSubmitted = () => {
    dispatch({ type: SET_HAS_SUBMITTED });
  };

  //GET REPOS
  const getUserRepos = async (login) => {
    setLoading();

    const res =
      await axios.get(`https://api.github.com/users/${login}/repos?per_page=30&sort=create:asc&client_id=${githubClientID}
    &client_secret=${githubClientSercret}`);

    dispatch({
      type: GET_REPOS,
      payload: res.data,
    });
  };

  //CLEAR USERS
  const clearUsers = () => {
    dispatch({ type: CLEAR_USERS });
  };

  //SET LOADING
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  //Set Alert
  const setAlert = (msg, type) => {
    dispatch({
      type: SET_ALERT,
      payload: { msg, type },
    });
  };

  //REMOVE ALERT
  const removeAlert = () => {
    dispatch({ type: REMOVE_ALERT });
  };

  return (
    <AppContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        hasSubmitted: state.hasSubmitted,
        alert: state.alert,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
        setAlert,
        removeAlert,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
