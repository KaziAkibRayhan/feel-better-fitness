import React, { useEffect, useState } from "react";
import Exercise from "../Exercise/Exercise";
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
      <div>
        <h2 className="text-exercise">
          Select today’s exercise {exercises.length}
        </h2>
        <div className="exercise-card-container">
          {exercises.map((exercise) => (
            <Exercise exercise={exercise} key={exercise.id}></Exercise>
          ))}
        </div>
      </div>
      <div className="exercise-cart-container">
        <div></div>
      </div>
    </div>
  );
};

export default ExerciseStore;
