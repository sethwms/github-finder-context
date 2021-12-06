import React, { useContext } from "react";

import RepoItem from "./RepoItem";

import GithubContext from "../../context/AppContext";

const Repos = () => {
  const { repos } = useContext(GithubContext);

  if (repos) {
    return repos.map((repo) => <RepoItem repo={repo} key={repo.id} />);
  }
};

export default Repos;
