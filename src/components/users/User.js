import React, { useEffect, Fragment, useContext } from "react";
import { useParams, Link } from "react-router-dom";

import Spinner from "../layout/Spinner";
import Repos from "../repos/Repos";

import GithubContext from "../../context/github/GithubContext";

const User = () => {
  const { getUser, user, loading, getUserRepos } = useContext(GithubContext);

  let { login } = useParams();

  useEffect(() => {
    getUser(login);
    getUserRepos(login);
    // eslint-disable-next-line
  }, []);

  if (loading) return <Spinner />;

  if (user) {
    const {
      name,
      avatar_url,
      location,
      company,
      bio,
      blog,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
    } = user;
    return (
      <Fragment>
        <Link to="/" className="btn btn-light">
          Back to search
        </Link>
        <div className="card grid-2">
          <div>
            <img
              src={avatar_url}
              alt=""
              className="round-img"
              style={{ width: "75%" }}
            />
          </div>
          <div>
            <h1 style={{ color: "#dc3545" }}>{name}</h1>
            <p>
              <strong>Hireable:</strong>{" "}
              {hireable ? (
                <i className="bi bi-check2-circle text-success"></i>
              ) : (
                <i className="bi bi-x-circle text-danger"></i>
              )}
            </p>
            <p>
              <strong>Location: </strong>
              {location}
            </p>
            <p>
              <strong>Company: </strong>
              {company}
            </p>
            <p>
              <strong>Website: </strong>
              {blog}
            </p>
            <p>
              <a href={html_url}>
                <button
                  className="btn btn-dark my-1"
                  style={{ borderRadius: "10px" }}
                >
                  <i className="bi bi-github"></i>
                  <strong> Visit Github Page</strong>
                </button>
              </a>
            </p>
            <br />
            <p>
              <strong>Bio: </strong>
              {bio}
            </p>
          </div>
        </div>
        <div className="text-center">
          <div className="badge badge-primary">Following: {following}</div>
          <div className="badge badge-success">Followers: {followers}</div>
          <div className="badge badge-light">Public Repos: {public_repos}</div>
          <div className="badge badge-dark">Public Gists: {public_gists}</div>
        </div>
        <div className="grid-3">
          <Repos />
        </div>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <Link to="/" className="btn btn-light">
          Back to search
        </Link>
        No user information found...
      </Fragment>
    );
  }
};

export default User;
