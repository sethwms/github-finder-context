import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";

const Search = ({ setAlert }) => {
  const { searchUsers, users, clearUsers } = useContext(GithubContext);

  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter a query string.", "Light");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  const onChange = ({ target: { value } }) => {
    setText(value);
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search users..."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="search"
          className="btn btn-dark btn-block"
        />
      </form>
      {users.length > 0 && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
