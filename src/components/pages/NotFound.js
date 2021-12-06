import React from "react";

const NotFound = () => {
  return (
    <div>
      <h1 style={{ fontStyle: "italic" }}>Error 404: File Not Found</h1>
      <p>
        The requested URL could not be located. Please check the URL and try
        again.
      </p>
      <p>
        If you feel that you have reached this page in error, please contact the
        site administrator.
      </p>
    </div>
  );
};

export default NotFound;
