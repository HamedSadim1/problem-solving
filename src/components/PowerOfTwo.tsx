import React, { useState } from "react";

const PowerOfTwo = () => {
  const [n, setN] = useState<number>(16);
  const [result, setResult] = useState<boolean | null>(null);

  const isPowerOfTwo = (n: number): boolean => {
    if (n <= 0) return false;
    return (n & (n - 1)) === 0;
  };

  const handleCheck = () => {
    setResult(isPowerOfTwo(n));
  };

  return (
    <div className="p-6 bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-white/20 text-white">
      <h2 className="text-2xl font-bold mb-4">Power of Two</h2>
      <p className="mb-4">Check if a number is a power of two.</p>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Number:</label>
        <input
          type="number"
          value={n}
          onChange={(e) => setN(parseInt(e.target.value))}
          className="w-full p-2 border border-white/30 rounded bg-white/20 text-white"
          min="1"
        />
      </div>
      <button
        onClick={handleCheck}
        className="bg-white/20 text-white px-4 py-2 rounded hover:bg-white/30 transition-all shadow-md"
      >
        Check Power of Two
      </button>
      <div className="mt-4">
        <strong>Result:</strong>{" "}
        {result !== null
          ? result
            ? "Yes, it's a power of two"
            : "No, it's not a power of two"
          : ""}
      </div>
      <div className="mt-6 p-4 bg-white/5 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Problem Information</h3>
        <div className="space-y-2 text-sm">
          <p>
            <strong>Problem:</strong> Given an integer n, return true if it is a
            power of two. Otherwise, return false.
          </p>
          <p>
            <strong>Examples:</strong>
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Input: n = 1 → Output: true (2^0 = 1)</li>
            <li>Input: n = 16 → Output: true (2^4 = 16)</li>
            <li>Input: n = 3 → Output: false</li>
            <li>Input: n = 4 → Output: true (2^2 = 4)</li>
            <li>Input: n = 5 → Output: false</li>
          </ul>
          <p>
            <strong>Algorithm Explanation:</strong> This solution uses a bitwise
            trick. In binary representation, powers of two have exactly one bit
            set to 1 (e.g., 4 = 100, 8 = 1000). When you subtract 1 from a power
            of two, you get a number with all bits set to the right of the
            original bit (e.g., 4-1 = 3 = 011). The bitwise AND of these two
            numbers will always be 0 for powers of two.
          </p>
          <p>
            <strong>Time Complexity:</strong> O(1) - Constant time operation
          </p>
          <p>
            <strong>Space Complexity:</strong> O(1) - No additional space used
          </p>
          <p>
            <strong>Applications:</strong> Used in computer science for checking
            memory allocation sizes, graphics programming for texture sizes, and
            various optimization problems where powers of two have special
            properties.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PowerOfTwo;
