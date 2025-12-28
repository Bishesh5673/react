import React from "react";
import { useState } from "react";
import "./Count.css";

function Count() {
  const [val, setVal] = useState(0);
  const [step, setStep] = useState(0);
  const resetCounter = () => {
    setVal(0);
    setStep(1);
  };
  return (
    <div className="par">
      <h1 className="heading">React Counter</h1>

      <div className="child">
        <h1>{val}</h1>
        <div>
          <button className="reset" onClick={resetCounter}>
            Reset
          </button>
        </div>
        <div className="box">
          <button onClick={() => setVal(val + 5)}>Add 5</button>
          <button onClick={() => setVal(val - 5)}>Subtract 5</button>
        </div>
        <div className="box">
          <input
            className="inp"
            type="text"
            inputMode="numeric"
            value={step}
            onChange={(e) => setStep(Number(e.target.value.replace(/\D/g, "")))}
          />
          <button className="plus" onClick={() => setVal(val + step)}>
            +
          </button>
          <button className="plus" onClick={() => setVal(val - step)}>
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default Count;
