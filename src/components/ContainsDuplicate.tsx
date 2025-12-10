import React, { useState } from "react";

const ContainsDuplicate = () => {
  const [arrayInput, setArrayInput] = useState<string>("1,2,3,1");
  const [result, setResult] = useState<boolean | null>(null);

  const containsDuplicate = (nums: number[]): boolean => {
    const set = new Set(nums);
    return set.size !== nums.length;
  };

  const handleCheck = () => {
    const arr = arrayInput
      .split(",")
      .map((n) => parseInt(n.trim()))
      .filter((n) => !isNaN(n));
    setResult(containsDuplicate(arr));
  };

  return (
    <div className="p-6 bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-white/20 text-white">
      <h2 className="text-2xl font-bold mb-4">Contains Duplicate</h2>
      <p className="mb-4">Check if an array contains any duplicate values.</p>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">
          Array (comma-separated):
        </label>
        <input
          type="text"
          value={arrayInput}
          onChange={(e) => setArrayInput(e.target.value)}
          className="w-full p-2 border border-white/30 rounded bg-white/20 text-white placeholder-white/70"
          placeholder="e.g., 1,2,3,1"
        />
      </div>
      <button
        onClick={handleCheck}
        className="bg-white/20 text-white px-4 py-2 rounded hover:bg-white/30 transition-all shadow-md"
      >
        Check Duplicates
      </button>
      <div className="mt-4">
        <strong>Result:</strong>{" "}
        {result !== null
          ? result
            ? "Yes, contains duplicates"
            : "No duplicates"
          : ""}
      </div>
      <div className="mt-6 p-4 bg-white/5 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Problem Information</h3>
        <div className="space-y-2 text-sm">
          <p>
            <strong>Problem:</strong> Given an integer array nums, return true
            if any value appears at least twice in the array, and return false
            if every element is distinct.
          </p>
          <p>
            <strong>Examples:</strong>
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Input: nums = [1,2,3,1] → Output: true</li>
            <li>Input: nums = [1,2,3,4] → Output: false</li>
            <li>Input: nums = [1,1,1,3,3,4,3,2,4,2] → Output: true</li>
            <li>Input: nums = [] → Output: false</li>
          </ul>
          <p>
            <strong>Algorithm Explanation:</strong> This solution uses a Set
            data structure to store unique elements. By comparing the size of
            the set (which contains only unique elements) with the original
            array length, we can determine if there are duplicates. If the set
            size is less than the array length, then there must be duplicates.
          </p>
          <p>
            <strong>Time Complexity:</strong> O(n) - Creating the set and
            comparing sizes are linear operations
          </p>
          <p>
            <strong>Space Complexity:</strong> O(n) - In the worst case, we
            store all elements in the set
          </p>
          <p>
            <strong>Applications:</strong> Used in data validation, finding
            unique elements, database operations, and various algorithmic
            problems. This approach is simple and efficient for most use cases.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContainsDuplicate;
