import React from "react";

const RepoItem = ({ repo: { name, description, html_url } }) => {
  return (
    <div className="card">
      <h3>
        <a href={html_url}>{name}</a>
      </h3>
      {description ? (
        <p>
          <strong>Description: </strong>
          {description}
        </p>
      ) : null}
    </div>
  );
};

export default RepoItem;
