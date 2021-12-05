import React, { useReducer } from "react";
import axios from "axios";

import GithubContext from "./GithubContext";
import GithubReducer from "./githubReducer";

import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
  SET_HAS_SUBMITTED,
} from "../types";

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  //SEARCH USER
  const searchUsers = async (text) => {
    setLoading();
    setHasSubmitted();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
      &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
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
      `https://api.github.com/users/${login}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
        &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
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
      await axios.get(`https://api.github.com/users/${login}/repos?per_page=30&sort=create:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
    &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

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

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
