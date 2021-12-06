import React, { useContext } from "react";

import AppContext from "../../context/AppContext";

const Alert = () => {
  const { alert } = useContext(AppContext);

  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className="bi bi-shield-exclamation" /> {alert.msg}
      </div>
    )
  );
};

export default Alert;
