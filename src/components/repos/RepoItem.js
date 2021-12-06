import React from "react";

const RepoItem = ({
  repo: { name, description, html_url, homepage, updated_at },
}) => {
  return (
    <div className="card">
      <h3>
        <a href={html_url}>{name}</a>
      </h3>
      {updated_at ? (
        <h5>
          Last Updated:{new Date(Date.parse(updated_at)).toLocaleString()}
        </h5>
      ) : null}{" "}
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
