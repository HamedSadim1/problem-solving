import React, { useState } from "react";

const MoveZeroes = () => {
  const [arrayInput, setArrayInput] = useState<string>("0,1,0,3,12");
  const [result, setResult] = useState<number[]>([]);

  const moveZeroes = (nums: number[]): void => {
    let lastNonZeroIndex = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
        nums[lastNonZeroIndex] = nums[i];
        lastNonZeroIndex++;
      }
    }
    for (let i = lastNonZeroIndex; i < nums.length; i++) {
      nums[i] = 0;
    }
  };

  const handleMove = () => {
    const arr = arrayInput
      .split(",")
      .map((n) => parseInt(n.trim()))
      .filter((n) => !isNaN(n));
    const copy = [...arr];
    moveZeroes(copy);
    setResult(copy);
  };

  return (
    <div className="p-6 bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-white/20 text-white">
      <h2 className="text-2xl font-bold mb-4">Move Zeroes</h2>
      <p className="mb-4">
        Move all zeroes to the end of the array while maintaining the relative
        order of non-zero elements.
      </p>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">
          Array (comma-separated):
        </label>
        <input
          type="text"
          value={arrayInput}
          onChange={(e) => setArrayInput(e.target.value)}
          className="w-full p-2 border border-white/30 rounded bg-white/20 text-white placeholder-white/70"
          placeholder="e.g., 0,1,0,3,12"
        />
      </div>
      <button
        onClick={handleMove}
        className="bg-white/20 text-white px-4 py-2 rounded hover:bg-white/30 transition-all shadow-md"
      >
        Move Zeroes
      </button>
      <div className="mt-4">
        <strong>Original:</strong> [{arrayInput.split(",").join(", ")}]
      </div>
      <div className="mt-2">
        <strong>Result:</strong> [{result.join(", ")}]
      </div>
      <div className="mt-6 p-4 bg-white/5 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Problem Information</h3>
        <div className="space-y-2 text-sm">
          <p>
            <strong>Problem:</strong> Given an integer array nums, move all 0's
            to the end of it while maintaining the relative order of the
            non-zero elements. Note that you must do this in-place without
            making a copy of the array.
          </p>
          <p>
            <strong>Examples:</strong>
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Input: nums = [0,1,0,3,12] → Output: [1,3,12,0,0]</li>
            <li>Input: nums = [0] → Output: [0]</li>
            <li>Input: nums = [1,0,1] → Output: [1,1,0]</li>
            <li>Input: nums = [0,0,1] → Output: [1,0,0]</li>
          </ul>
          <p>
            <strong>Algorithm Explanation:</strong> This solution uses a
            two-pass approach. First, it iterates through the array and moves
            all non-zero elements to the front, keeping track of the position
            where the next non-zero element should be placed. Then, it fills the
            remaining positions with zeros. This maintains the relative order of
            non-zero elements while moving all zeros to the end.
          </p>
          <p>
            <strong>Time Complexity:</strong> O(n) - Two linear passes through
            the array
          </p>
          <p>
            <strong>Space Complexity:</strong> O(1) - In-place modification, no
            additional space used
          </p>
          <p>
            <strong>Applications:</strong> Used in array manipulation, data
            preprocessing, and various algorithmic problems. This pattern is
            useful when you need to rearrange elements based on certain criteria
            while preserving order.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoveZeroes;
