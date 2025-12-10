import React, { useState } from "react";

const MaxSubarraySum = () => {
  const [arrayInput, setArrayInput] = useState<string>("-2,1,-3,4,-1,2,1,-5,4");
  const [result, setResult] = useState<number | null>(null);

  const maxSubarraySum = (nums: number[]): number => {
    let maxCurrent = nums[0];
    let maxGlobal = nums[0];
    for (let i = 1; i < nums.length; i++) {
      maxCurrent = Math.max(nums[i], maxCurrent + nums[i]);
      if (maxCurrent > maxGlobal) {
        maxGlobal = maxCurrent;
      }
    }
    return maxGlobal;
  };

  const handleCalculate = () => {
    const arr = arrayInput
      .split(",")
      .map((n) => parseInt(n.trim()))
      .filter((n) => !isNaN(n));
    if (arr.length > 0) {
      setResult(maxSubarraySum(arr));
    }
  };

  return (
    <div className="p-6 bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-white/20 text-white">
      <h2 className="text-2xl font-bold mb-4">Max Subarray Sum</h2>
      <div className="mb-6">
        <p className="mb-3">
          <strong>Probleem:</strong> Vind de aaneengesloten subarray met de
          grootste som (Kadane's algoritme).
        </p>
        <p className="mb-3">
          <strong>Voorbeeld:</strong> Array = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
          <br />
          Max subarray = [4, -1, 2, 1] som = 6
        </p>
        <p className="mb-3">
          <strong>Kadane's Algoritme:</strong>
        </p>
        <ul className="list-disc list-inside mb-3 ml-4">
          <li>Houd bij: maxCurrent (lokale max) en maxGlobal (globale max)</li>
          <li>
            Voor elk element: maxCurrent = max(element, maxCurrent + element)
          </li>
          <li>Update maxGlobal als maxCurrent groter is</li>
        </ul>
        <p className="mb-3">
          <strong>Tijdcomplexiteit:</strong> O(n) - Enkele pass door de array
        </p>
        <p className="mb-3">
          <strong>Ruimtecomplexiteit:</strong> O(1) - Constante extra ruimte
        </p>
        <p className="mb-3">
          <strong>Voordelen:</strong> Efficiënt voor grote arrays, dynamisch
          programmeren
        </p>
        <p className="mb-3">
          <strong>Toepassingen:</strong> Stock prijzen, temperatuur data,
          financiële analyse
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
          placeholder="e.g., -2,1,-3,4,-1,2,1,-5,4"
        />
      </div>
      <button
        onClick={handleCalculate}
        className="bg-white/20 text-white px-4 py-2 rounded hover:bg-white/30 transition-all shadow-md"
      >
        Calculate Max Sum
      </button>
      <div className="mt-4">
        <strong>Result:</strong> {result !== null ? result : ""}
      </div>
    </div>
  );
};

export default MaxSubarraySum;
