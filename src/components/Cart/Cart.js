import React, { useState } from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  const [takeBreak, setTakeBreak] = useState([]);
  let totalTime = 0;
  for (const exDetail of cart) {
    totalTime = totalTime + exDetail.time;
  }

  const handleBreak = (e) => {
    const text = e.target.innerText;
    setTakeBreak(text);
  };

  return (
    <div>
      <div>
        <h3>Add A Break</h3>
      </div>
      <div>
        <h2>Exercise Details</h2>
        <h3>Exercise time: {totalTime} seconds</h3>
        <h3>Break time: {takeBreak}</h3>
      </div>
    </div>
  );
};

export default Cart;
