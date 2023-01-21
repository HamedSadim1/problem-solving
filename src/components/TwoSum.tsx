import React, { useState } from "react";

const TwoSum = () => {
  const [result, setResult] = useState<number[]>([1, 2, 3, 4, 5]);

  const findTwoSum = (target: number) => {
    // declare new Array;
    const newArray: number[] = [];
    // loop over the first array;
    for (let i = 0; i < result.length; i++) {
      // loop over the second array let j = i +1; we target the second element.
      for (let j = i + 1; j < result.length; j++) {
        // the second and second element is equal to target set to Result array .
        if (result[i] + result[j] === target) {
          newArray.push(i);
          newArray.push(j);
        } else {
          setResult([-1]);
        }
      }
    }
    setResult(newArray);
  };
  return (
    <div>
      <div>
        {result.map((e, index) => {
          return <div key={index}>{e}</div>;
        })}
      </div>
      <button onClick={() => findTwoSum(9)}>Find two Index</button>
    </div>
  );
};

export default TwoSum;
