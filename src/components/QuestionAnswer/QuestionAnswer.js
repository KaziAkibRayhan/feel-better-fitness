import React from "react";

const QuestionAnswer = () => {
  return (
    <div>
      <div>
        <h2>Question 1: How Does React Works ?</h2>
        <p>
          <code>Answer:</code> React uses a declarative paradigm that makes it
          easier to reason about your application and aims to be both efficient
          and flexible. It designs simple views for each state in your
          application, and React will efficiently update and render just the
          right component when your data changes. ReactJS divides the UI into
          isolated reusable pieces of code known as components. React components
          work similarly to JavaScript functions as they accept arbitrary inputs
          called properties or props.
        </p>
      </div>
      <div>
        <h2>Question 2: Props vs State</h2>
        <p>
          Answer: Props are used to pass data from one component to another. The
          state is a local data storage that is local to the component only and
          cannot be passed to other components.
        </p>
        <p>Props is Immutable (cannot be modified)</p>
        <p>State is Mutable ( can be modified).</p>
        <p>Props are read-only.</p>
        <p>State is both read and write.</p>
      </div>
      <div>
        <h2>What is the use of useEffect other than loading data?</h2>
        <p>
          Answer: Validating an input while it's receiving characters is another
          great application for useEffect . Whilst the input is being stored in
          a state using useState , the validation takes place every time the
          input changes, giving immediate feedback to the user.
        </p>
      </div>
    </div>
  );
};

export default QuestionAnswer;
