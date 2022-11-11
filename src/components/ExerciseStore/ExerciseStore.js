import React, { useEffect, useState } from "react";
import "./ExerciseStore.css";

const ExerciseStore = () => {
  const [exercises, setExercises] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setExercises(data));
  }, []);

  return (
    <div className="exercise-store-container">
      <div className="exercise-card-container">
        <h2>Select today’s exercise {exercises.length}</h2>
      </div>
      <div className="exercise-cart-container">
        <h4>Zahid Hossain</h4>
      </div>
    </div>
  );
};

export default ExerciseStore;
