import React from "react";
import "../App.css";

const Titles = ({ onBtnClick }) => {
  return (
    <div>
      <h1 className="title-container__title">Weather Forecast</h1>
      <p className="title-container__subtitle">
        Find out Temperature, Conditions and more...
      </p>
      <button class="button" onClick={onBtnClick}>
        Click Me
      </button>
    </div>
  );
};

export default Titles;