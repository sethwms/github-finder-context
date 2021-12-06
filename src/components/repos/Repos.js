import React, { useContext } from "react";

import RepoItem from "./RepoItem";

import AppContext from "../../context/AppContext";

const Repos = () => {
  const { repos } = useContext(AppContext);

  if (repos) {
    return repos.map((repo) => <RepoItem repo={repo} key={repo.id} />);
  }
};

export default Repos;
