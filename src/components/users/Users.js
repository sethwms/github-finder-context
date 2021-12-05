import React, { useContext } from "react";

import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";

import GithubContext from "../../context/github/GithubContext";

const Users = () => {
  const { users, hasSubmitted, loading } = useContext(GithubContext);

  if ((users.length === 0) & hasSubmitted & !loading) {
    return <div>No results match your query.</div>;
  }

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default Users;
