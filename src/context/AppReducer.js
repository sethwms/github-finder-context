import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  SET_ALERT,
  REMOVE_ALERT,
  GET_REPOS,
  SET_HAS_SUBMITTED,
} from "./types";

// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
        hasSubmitted: true,
        alert: null,
      };
    case SET_HAS_SUBMITTED:
      return {
        ...state,
        hasSubmitted: true,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false,
        hasSubmitted: false,
      };
    case SET_ALERT:
      return {
        ...state,
        alert: action.payload,
        loading: false,
      };
    case REMOVE_ALERT:
      return {
        ...state,
        alert: null,
      };
    default:
      return state;
  }
};
