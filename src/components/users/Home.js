import React from "react";
import Search from "./Search";
import Users from "./Users";

const Home = ({
  loading,
  users,
  hasSubmitted,
  searchUsers,
  clearUsers,
  setAlert,
}) => {
  return (
    <div>
      <Search
        searchUsers={searchUsers}
        clearUsers={clearUsers}
        showClear={users.length > 0 ? true : false}
        setAlert={setAlert}
      />
      <Users loading={loading} users={users} hasSubmitted={hasSubmitted} />
    </div>
  );
};

export default Home;
