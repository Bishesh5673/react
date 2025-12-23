import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [val, setVal] = useState(0);
//   val=0
//   const increment = () => {
//     setVal(val + 1);
//   };
//   const decrement = () => {
//     setVal(val - 1);
//   };
//   const [step, setStep] = useState(1);
//   const resetCounter = () => {
//     setVal(0);
//     setStep(1);
//   };
  return (
    <div className="parent">
      <h1>Counter Application</h1>
      <h2>{val}</h2>
      <div>
        <button
          onClick={() => {
            // increment();
            if (val < 10) {
              setVal(val + 1);
            }
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            // decrement();
            if (val > 0) {
              setVal(val - 1);
            }
          }}
        >
          Decrement
        </button>
      </div>

      {/* <h1>{val}</h1>
      <div>
        <button onClick={()=>setVal(val + 5)}>Add 5</button>
        <button onClick={()=> setVal(val - 5)}>Subtract 5</button>
        <button onClick={resetCounter}>Reset</button>
      </div>
      <div>
        <input
          type="number"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <button onClick={()=> setVal(val + step)}>+</button>
      </div> */}
    </div>
  );
}

export default Counter;



