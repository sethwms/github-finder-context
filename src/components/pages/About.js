import React from "react";

const About = () => {
  return (
    <div>
      <h1>Github User Search App</h1>
      <h5>Version 1.1.0</h5>
      <br />
      <p>
        This project is based off Brad Traversey's Udemy Course, found{" "}
        <a href="https://www.udemy.com/course/modern-react-front-to-back/">
          here
        </a>
        . If you're looking for a course to teach the basics of React functional
        components and context, I highly recommend it. As the project is built
        using React Router v5, I have had to make some updates so that it is
        compatible with React Router v6, and encourage you to visit the repo
      </p>
      <br />
      <p>
        The Github repo for this project can be found{" "}
        <a href="https://github.com/sethwms/github-finder-context">here</a>.
        Please feel free to clone the project and examine it's construction to
        aid in your own learning.
      </p>
      <p>
        If you encounter any problems with functionality, please report them to{" "}
        <a href="mailto:contact@vulcan-it.com">contact@vulcan-it.com</a>
      </p>
    </div>
  );
};

export default About;
