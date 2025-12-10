import React, { useState } from "react";

const MajorityElement = () => {
  const [arrayInput, setArrayInput] = useState<string>("3,2,3");
  const [result, setResult] = useState<number | null>(null);

  const majorityElement = (nums: number[]): number => {
    let candidate = nums[0];
    let count = 1;
    for (let i = 1; i < nums.length; i++) {
      if (count === 0) {
        candidate = nums[i];
        count = 1;
      } else if (nums[i] === candidate) {
        count++;
      } else {
        count--;
      }
    }
    return candidate;
  };

  const handleFind = () => {
    const arr = arrayInput
      .split(",")
      .map((n) => parseInt(n.trim()))
      .filter((n) => !isNaN(n));
    if (arr.length > 0) {
      setResult(majorityElement(arr));
    }
  };

  return (
    <div className="p-6 bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-white/20 text-white">
      <h2 className="text-2xl font-bold mb-4">Majority Element</h2>
      <p className="mb-4">
        Find the majority element that appears more than n/2 times.
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
          placeholder="e.g., 3,2,3"
        />
      </div>
      <button
        onClick={handleFind}
        className="bg-white/20 text-white px-4 py-2 rounded hover:bg-white/30 transition-all shadow-md"
      >
        Find Majority Element
      </button>
      <div className="mt-4">
        <strong>Result:</strong> {result !== null ? result : ""}
      </div>
      <div className="mt-6 p-4 bg-white/5 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Problem Information</h3>
        <div className="space-y-2 text-sm">
          <p>
            <strong>Problem:</strong> Given an array nums of size n, return the
            majority element. The majority element is the element that appears
            more than ⌊n/2⌋ times. You may assume that the majority element
            always exists in the array.
          </p>
          <p>
            <strong>Examples:</strong>
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Input: nums = [3,2,3] → Output: 3</li>
            <li>Input: nums = [2,2,1,1,1,2,2] → Output: 2</li>
            <li>Input: nums = [1] → Output: 1</li>
            <li>Input: nums = [6,5,5] → Output: 5</li>
          </ul>
          <p>
            <strong>Algorithm Explanation:</strong> This solution uses the
            Boyer-Moore Voting Algorithm. The algorithm works by essentially
            maintaining a counter for the majority element. As we iterate
            through the array, we increment the counter when we see the current
            candidate and decrement it when we see a different element. When the
            counter reaches zero, we change the candidate. Since the majority
            element appears more than n/2 times, it will always be the final
            candidate.
          </p>
          <p>
            <strong>Time Complexity:</strong> O(n) - Single pass through the
            array
          </p>
          <p>
            <strong>Space Complexity:</strong> O(1) - Constant space, only a few
            variables used
          </p>
          <p>
            <strong>Applications:</strong> Used in voting systems, data
            analysis, finding dominant elements in datasets, and various
            algorithmic problems. The Boyer-Moore algorithm is particularly
            efficient for this problem and demonstrates a clever approach to
            finding majority elements without sorting or using extra space.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MajorityElement;
