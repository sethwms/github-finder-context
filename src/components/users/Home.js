import React from "react";
import Search from "./Search";
import Users from "./Users";

const Home = ({ setAlert }) => {
  return (
    <div>
      <Search setAlert={setAlert} />
      <Users />
    </div>
  );
};

export default Home;
