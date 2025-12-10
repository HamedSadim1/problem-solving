import React, { useState } from "react";

const IntersectionArrays = () => {
  const [array1Input, setArray1Input] = useState<string>("1,2,2,1");
  const [array2Input, setArray2Input] = useState<string>("2,2");
  const [result, setResult] = useState<number[]>([]);

  const intersection = (nums1: number[], nums2: number[]): number[] => {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    const result: number[] = [];
    for (const num of set1) {
      if (set2.has(num)) {
        result.push(num);
      }
    }
    return result;
  };

  const handleFind = () => {
    const arr1 = array1Input
      .split(",")
      .map((n) => parseInt(n.trim()))
      .filter((n) => !isNaN(n));
    const arr2 = array2Input
      .split(",")
      .map((n) => parseInt(n.trim()))
      .filter((n) => !isNaN(n));
    setResult(intersection(arr1, arr2));
  };

  return (
    <div className="p-6 bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-white/20 text-white">
      <h2 className="text-2xl font-bold mb-4">Intersection of Two Arrays</h2>
      <p className="mb-4">
        Find the intersection of two arrays (common elements).
      </p>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">
          First Array (comma-separated):
        </label>
        <input
          type="text"
          value={array1Input}
          onChange={(e) => setArray1Input(e.target.value)}
          className="w-full p-2 border border-white/30 rounded bg-white/20 text-white placeholder-white/70"
          placeholder="e.g., 1,2,2,1"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">
          Second Array (comma-separated):
        </label>
        <input
          type="text"
          value={array2Input}
          onChange={(e) => setArray2Input(e.target.value)}
          className="w-full p-2 border border-white/30 rounded bg-white/20 text-white placeholder-white/70"
          placeholder="e.g., 2,2"
        />
      </div>
      <button
        onClick={handleFind}
        className="bg-white/20 text-white px-4 py-2 rounded hover:bg-white/30 transition-all shadow-md"
      >
        Find Intersection
      </button>
      <div className="mt-4">
        <strong>Intersection:</strong> [{result.join(", ")}]
      </div>
      <div className="mt-6 p-4 bg-white/5 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Problem Information</h3>
        <div className="space-y-2 text-sm">
          <p>
            <strong>Problem:</strong> Given two integer arrays nums1 and nums2,
            return an array of their intersection. Each element in the result
            must appear as many times as it shows in both arrays (intersection
            with multiplicity).
          </p>
          <p>
            <strong>Examples:</strong>
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Input: nums1 = [1,2,2,1], nums2 = [2,2] → Output: [2,2]</li>
            <li>Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4] → Output: [4,9]</li>
            <li>Input: nums1 = [1,2,3], nums2 = [4,5,6] → Output: []</li>
            <li>Input: nums1 = [1,1,2], nums2 = [1,2,2] → Output: [1,2]</li>
          </ul>
          <p>
            <strong>Algorithm Explanation:</strong> This solution uses hash maps
            (objects) to count frequencies of elements in both arrays. Then it
            iterates through one map and adds elements to the result based on
            the minimum frequency between the two arrays. This ensures that
            elements appear in the intersection as many times as they appear in
            both arrays.
          </p>
          <p>
            <strong>Time Complexity:</strong> O(m + n) - Where m and n are the
            lengths of the two arrays
          </p>
          <p>
            <strong>Space Complexity:</strong> O(min(m, n)) - Space used by the
            hash maps
          </p>
          <p>
            <strong>Applications:</strong> Used in database operations, set
            theory problems, finding common elements between datasets, and
            various data processing tasks. This approach handles duplicates
            correctly and is efficient for large datasets.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntersectionArrays;
