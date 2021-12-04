import React from "react";

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-primary">
      <h3>
        <i className={icon} /> {title}
      </h3>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Github Finder",
  icon: "bi bi-github",
};

export default Navbar;
