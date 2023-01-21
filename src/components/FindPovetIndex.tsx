import React, { useState } from "react";

export const FindPovetIndex = () => {
  const [arr, setArr] = useState<number[]>([1, 7, 3, 6, 5, 6]);
  const [pivotIndex, setPivotIndex] = useState<number>(-1);

  const handlePovetIndex = () => {
    // declare left_sum to 0;
    let left_sum = 0;
    // declare right_sum sum of all the array;
    let right_sum = arr.reduce((acc, cur) => acc + cur, 0);

    // loops over the array
    for (let i = 0; i < arr.length; i++) {
      // right_sum -= (arr[i])  = 2 the sum of the element;
      right_sum -= arr[i];

      if (left_sum === right_sum) {
        setPivotIndex(i);
        console.log(i);
        return i;
      }
      // left_sum is 0 = (0 +2) arr[i]
      left_sum += arr[i];
    }
    console.log(-1);
    return -1;
  };
  return (
    <div>
      <div>
        {arr.map((e, index) => {
          return <div key={index}>{e}</div>;
        })}
      </div>
      <button onClick={handlePovetIndex}>find PovetIndex</button>
      <div>{pivotIndex !== -1 && <div>{pivotIndex}</div>}</div>
    </div>
  );
};

export default FindPovetIndex;
