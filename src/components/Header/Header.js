import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-style">
      <span>
        <FontAwesomeIcon icon={faDumbbell} />
      </span>
      <h1>Fell Better Fitness</h1>
    </div>
  );
};

export default Header;
