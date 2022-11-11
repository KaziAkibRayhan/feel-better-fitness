import React from "react";
import "./Exercise.css";

const Exercise = ({ exercise }) => {
  const { name, img, time } = exercise;
  return (
    <div className="card">
      <img className="card-img" src={img} alt="" />
      <h3>{name}</h3>
      <p>Time Required: {time}s</p>
    </div>
  );
};

export default Exercise;
