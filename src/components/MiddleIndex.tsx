import React, { useState } from "react";

const MiddleIndex = () => {
  const [arr, setArra] = useState<number[]>([1, 2, 3, 4, 5, 6]);
  const [findIndex, setFindIndex] = useState<number>(0);

  const handleFindMiddleIndex = () => {
    const newArray = [...arr];
    const middleIndex = Math.floor(newArray.length / 2);
    setFindIndex(middleIndex);
    console.log(middleIndex);
  };
  return (
    <div>
      <div>
        <div>
          {arr.map((n, index) => {
            return <div key={index}>{n}</div>;
          })}
        </div>
        <button onClick={handleFindMiddleIndex}>Find MiddleIndex</button>

        {findIndex}
      </div>
    </div>
  );
};

export default MiddleIndex;
