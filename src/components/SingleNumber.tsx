import React, { useState } from "react";

const SingleNumber = () => {
  const [arrayInput, setArrayInput] = useState<string>("2,2,1");
  const [result, setResult] = useState<number | null>(null);

  const singleNumber = (nums: number[]): number => {
    let result = 0;
    for (const num of nums) {
      result ^= num;
    }
    return result;
  };

  const handleFind = () => {
    const arr = arrayInput
      .split(",")
      .map((n) => parseInt(n.trim()))
      .filter((n) => !isNaN(n));
    setResult(singleNumber(arr));
  };

  return (
    <div className="p-6 bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-white/20 text-white">
      <h2 className="text-2xl font-bold mb-4">Single Number</h2>
      <p className="mb-4">
        Find the number that appears only once in an array where others appear
        twice.
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
          placeholder="e.g., 2,2,1"
        />
      </div>
      <button
        onClick={handleFind}
        className="bg-white/20 text-white px-4 py-2 rounded hover:bg-white/30 transition-all shadow-md"
      >
        Find Single Number
      </button>
      <div className="mt-4">
        <strong>Result:</strong> {result !== null ? result : ""}
      </div>
      <div className="mt-6 p-4 bg-white/5 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Problem Information</h3>
        <div className="space-y-2 text-sm">
          <p>
            <strong>Problem:</strong> Given a non-empty array of integers nums,
            every element appears twice except for one. Find that single one.
          </p>
          <p>
            <strong>Examples:</strong>
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Input: nums = [2,2,1] → Output: 1</li>
            <li>Input: nums = [4,1,2,1,2] → Output: 4</li>
            <li>Input: nums = [1] → Output: 1</li>
            <li>Input: nums = [1,1,2,2,3,3,4] → Output: 4</li>
          </ul>
          <p>
            <strong>Algorithm Explanation:</strong> This solution uses the XOR
            bitwise operation. XOR has the property that a ^ a = 0 and a ^ 0 =
            a. When we XOR all numbers together, the pairs that appear twice
            will cancel each other out (become 0), leaving only the number that
            appears once. This works because XOR is commutative and associative.
          </p>
          <p>
            <strong>Time Complexity:</strong> O(n) - We iterate through the
            array once
          </p>
          <p>
            <strong>Space Complexity:</strong> O(1) - Constant space, no
            additional data structures used
          </p>
          <p>
            <strong>Applications:</strong> Used in finding unique elements in
            arrays, error detection in data transmission, and various coding
            problems. The XOR approach is particularly efficient when dealing
            with large datasets where space is a concern.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleNumber;
