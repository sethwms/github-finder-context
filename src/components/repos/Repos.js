import React from "react";
import RepoItem from "./RepoItem";

const Repos = ({ repos }) => {
  if (!repos) {
    return <div>No respositories found</div>;
  } else {
    return repos.map((repo) => <RepoItem repo={repo} key={repo.id} />);
  }
};

export default Repos;
