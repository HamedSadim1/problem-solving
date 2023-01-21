import React, { useState } from "react";

const RunningSum = () => {
  const [arr, setArra] = useState<number[]>([1, 2, 3, 4, 5]);

  const handleRunningSum = () => {
    // make a new Array
    const newArray = [...arr];
    // declare a variable to
    let runningSum = 0;
    // loops over the array and save it in arrs runningSum += num; [0 + 1, 1 + 2, 3 + more]
    let arrs: number[] = newArray.map((numb) => (runningSum += numb));
    setArra(arrs);
  };

  return (
    <div>
      <div>
        {arr.map((e, index) => {
          return <div key={index}>{e}</div>;
        })}
      </div>

      <button onClick={handleRunningSum}>RunningSum Array</button>
    </div>
  );
};

export default RunningSum;
