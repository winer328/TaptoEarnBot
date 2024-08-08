import "./styles.css";

import React from "react";

const BackButton = () => {
  const goBack = () => {
    window.history.back();
  };

  return <button onClick={goBack} className="back-button"></button>;
};

export default BackButton;
