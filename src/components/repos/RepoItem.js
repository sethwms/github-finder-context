import React from "react";

const RepoItem = ({ repo: { name, description, html_url, homepage } }) => {
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
      {homepage ? (
        <p>
          <a href={homepage}>
            <button
              className="btn btn-dark my-1"
              style={{ borderRadius: "10px" }}
            >
              <i className="bi bi-house-fill"></i>
              <strong> Visit the Homepage</strong>
            </button>
          </a>
        </p>
      ) : null}
    </div>
  );
};

export default RepoItem;
