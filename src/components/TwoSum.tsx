import React, { useState } from "react";

/**
 * Two Sum exercise component.
 * Implements the classic Two Sum problem where you need to find two indices
 * in an array that add up to a target value.
 *
 * @returns {JSX.Element} The Two Sum exercise interface
 */
const TwoSum = () => {
  // State for user inputs
  const [arrayInput, setArrayInput] = useState<string>("1,2,3,4,5");
  const [target, setTarget] = useState<number>(9);
  const [result, setResult] = useState<number[]>([]);

  /**
   * Finds two indices in the array that sum to the target value.
   * Uses a brute force approach with nested loops.
   */
  const findTwoSum = () => {
    const arr = arrayInput
      .split(",")
      .map((n) => parseInt(n.trim()))
      .filter((n) => !isNaN(n));
    const indices: number[] = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === target) {
          indices.push(i, j);
          break;
        }
      }
      if (indices.length > 0) break;
    }
    setResult(indices.length > 0 ? indices : [-1]);
  };

  return (
    <div className="p-6 bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-white/20 text-white">
      <h2 className="text-2xl font-bold mb-4">Two Sum</h2>
      <div className="mb-6">
        <p className="mb-3">
          <strong>Probleem:</strong> Gegeven een array van integers en een
          target waarde, vind twee indices waarvan de elementen optellen tot de
          target.
        </p>
        <p className="mb-3">
          <strong>Voorbeeld:</strong> Array = [2, 7, 11, 15], Target = 9<br />
          Resultaat: [0, 1] (omdat 2 + 7 = 9)
        </p>
        <p className="mb-3">
          <strong>Constraints:</strong>
        </p>
        <ul className="list-disc list-inside mb-3 ml-4">
          <li>Er is precies één oplossing</li>
          <li>Dezelfde index mag niet twee keer gebruikt worden</li>
          <li>Array bevat minimaal 2 elementen</li>
        </ul>
        <p className="mb-3">
          <strong>Tijdcomplexiteit:</strong> O(n²) - Brute force aanpak met
          geneste loops
        </p>
        <p className="mb-3">
          <strong>Optimale oplossing:</strong> Gebruik een hashmap voor O(n)
          tijdcomplexiteit
        </p>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">
          Array (comma-separated):
        </label>
        <input
          type="text"
          value={arrayInput}
          onChange={(e) => setArrayInput(e.target.value)}
          className="w-full p-2 border border-white/30 rounded bg-white/20 text-white placeholder-white/70"
          placeholder="e.g., 1,2,3,4,5"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Target:</label>
        <input
          type="number"
          value={target}
          onChange={(e) => setTarget(parseInt(e.target.value))}
          className="w-full p-2 border border-white/30 rounded bg-white/20 text-white"
        />
      </div>
      <button
        onClick={findTwoSum}
        className="bg-white/20 text-white px-4 py-2 rounded hover:bg-white/30 transition-all shadow-md"
      >
        Find Indices
      </button>
      <div className="mt-4">
        <strong>Result:</strong>{" "}
        {result.length > 0 ? `[${result.join(", ")}]` : "No solution"}
      </div>
    </div>
  );
};

export default TwoSum;
