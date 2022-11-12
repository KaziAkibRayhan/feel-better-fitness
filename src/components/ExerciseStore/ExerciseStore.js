import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Exercise from "../Exercise/Exercise";
import "./ExerciseStore.css";

const ExerciseStore = () => {
  const [exercises, setExercises] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setExercises(data));
  }, []);

  const handleExercise = (exercise) => {
    const newCart = [...cart, exercise];
    setCart(newCart);
  };

  return (
    <div className="exercise-store-container">
      <div>
        <h2 className="text-exercise">
          Select today’s exercise {exercises.length}
        </h2>
        <div className="exercise-card-container">
          {exercises.map((exercise) => (
            <Exercise
              exercise={exercise}
              key={exercise.id}
              handleExercise={handleExercise}
            ></Exercise>
          ))}
        </div>
      </div>
      <div className="exercise-cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default ExerciseStore;
