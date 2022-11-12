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
        <h3>Name: Jillur Rahman</h3>
        <p>Location: Rampura, Dhaka.</p>
        <div className="cart-info-detail">
          <h4>Weight: 65 KG</h4>
          <h4>Height: 5.7</h4>
          <h4>Age: 23yrs</h4>
        </div>
      </div>
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
