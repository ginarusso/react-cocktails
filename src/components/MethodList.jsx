import React from "react";

const MethodList = ({ method }) => {
  console.log("method:" + method)
  return (
    <div className="method">
      <h4>Method</h4>
      <ol>
        {method.map((stepObj, index) => {
          const stepKey = Object.keys(stepObj)[0]; // Get the key of the step (e.g., "Step 1")
          const stepValue = stepObj[stepKey]; // Get the value of the step (e.g., "Chill the bottle of prosecco...")
          return <li key={index}><strong>{stepKey}:</strong> {stepValue}</li>;
        })}
      </ol>
    </div>
  );
}

export default MethodList;
