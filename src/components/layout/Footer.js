import React from "react";

const Footer = () => {
  return (
    <div className="bg-light footer">
      <div></div>
      <div className="container my-1">
        <div>
          <p>
            <a href="https://github.com/sethwms">
              Github <i className="bi bi-github" />
            </a>
          </p>
          <p>
            <a href="https://github.com/it_vulcan">
              Twitter <i className="bi bi-twitter" />
            </a>
          </p>
          <p>
            <a href="mailto:contact@vulcan-it.com">
              Email <i className="bi bi-envelope"></i>
            </a>
          </p>
          <p>
            <a href="https://www.vulcan-it.com">
              Homepage <i className="bi bi-house-fill" />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
