import React, { useState } from "react";

const HappyNumber = () => {
  const [n, setN] = useState<number>(19);
  const [result, setResult] = useState<boolean | null>(null);

  const isHappy = (n: number): boolean => {
    const seen = new Set<number>();
    while (n !== 1 && !seen.has(n)) {
      seen.add(n);
      n = n
        .toString()
        .split("")
        .reduce((sum, digit) => sum + parseInt(digit) ** 2, 0);
    }
    return n === 1;
  };

  const handleCheck = () => {
    setResult(isHappy(n));
  };

  return (
    <div className="p-6 bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-white/20 text-white">
      <h2 className="text-2xl font-bold mb-4">Happy Number</h2>
      <p className="mb-4">
        Check if a number is a happy number (sum of squares of digits eventually
        reaches 1).
      </p>
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
        Check Happy Number
      </button>
      <div className="mt-4">
        <strong>Result:</strong>{" "}
        {result !== null
          ? result
            ? "Yes, it's a happy number"
            : "No, it's not a happy number"
          : ""}
      </div>
      <div className="mt-6 p-4 bg-white/5 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Problem Information</h3>
        <div className="space-y-2 text-sm">
          <p>
            <strong>Problem:</strong> Write an algorithm to determine if a
            number n is happy. A happy number is a number defined by the
            following process: Starting with any positive integer, replace the
            number by the sum of the squares of its digits, and repeat the
            process until the number equals 1 (where it will stay), or it loops
            endlessly in a cycle which does not include 1.
          </p>
          <p>
            <strong>Examples:</strong>
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>
              Input: n = 19 → Output: true (1² + 9² = 1 + 81 = 82, 8² + 2² = 64
              + 4 = 68, 6² + 8² = 36 + 64 = 100, 1² + 0² + 0² = 1)
            </li>
            <li>
              Input: n = 2 → Output: false (2² = 4, 4² = 16, 1² + 6² = 1 + 36 =
              37, 3² + 7² = 9 + 49 = 58, and so on, enters a cycle)
            </li>
            <li>Input: n = 1 → Output: true</li>
            <li>Input: n = 7 → Output: true</li>
          </ul>
          <p>
            <strong>Algorithm Explanation:</strong> This solution uses the
            Floyd's cycle detection algorithm (tortoise and hare) but simplified
            with a set to detect cycles. We repeatedly calculate the sum of
            squares of digits until we reach 1 (happy) or detect a cycle
            (unhappy). The key insight is that unhappy numbers will eventually
            cycle through the same sequence of numbers.
          </p>
          <p>
            <strong>Time Complexity:</strong> O(log n) - The number of digits
            decreases with each iteration
          </p>
          <p>
            <strong>Space Complexity:</strong> O(log n) - Space used by the set
            to store seen numbers
          </p>
          <p>
            <strong>Applications:</strong> Used in recreational mathematics,
            number theory studies, and as an example of cycle detection
            algorithms. Also appears in coding interviews to test understanding
            of loops and sets.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HappyNumber;
