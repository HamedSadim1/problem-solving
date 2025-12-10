import React, { useState } from "react";

const BinarySearch = () => {
  const [arrayInput, setArrayInput] = useState<string>("1,3,5,7,9,11");
  const [target, setTarget] = useState<number>(7);
  const [result, setResult] = useState<number | null>(null);

  const binarySearch = (arr: number[], target: number): number => {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] === target) return mid;
      if (arr[mid] < target) left = mid + 1;
      else right = mid - 1;
    }
    return -1;
  };

  const handleSearch = () => {
    const arr = arrayInput
      .split(",")
      .map((n) => parseInt(n.trim()))
      .filter((n) => !isNaN(n));
    const index = binarySearch(arr, target);
    setResult(index !== -1 ? index : null);
  };

  return (
    <div className="p-6 bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-white/20 text-white">
      <h2 className="text-2xl font-bold mb-4">Binary Search</h2>
      <div className="mb-6">
        <p className="mb-3">
          <strong>Probleem:</strong> Vind de index van een target waarde in een
          gesorteerde array met behulp van binary search.
        </p>
        <p className="mb-3">
          <strong>Hoe het werkt:</strong> Deel de array herhaaldelijk in tweeën
          en vergelijk met het middelste element.
        </p>
        <p className="mb-3">
          <strong>Voorbeeld:</strong> Array = [1, 3, 5, 7, 9, 11], Target = 7
          <br />
          Resultaat: Index 3 (0-based)
        </p>
        <p className="mb-3">
          <strong>Voorwaarden:</strong>
        </p>
        <ul className="list-disc list-inside mb-3 ml-4">
          <li>Array moet gesorteerd zijn</li>
          <li>Werkt alleen met vergelijkbare elementen</li>
          <li>Retourneert -1 als element niet gevonden wordt</li>
        </ul>
        <p className="mb-3">
          <strong>Tijdcomplexiteit:</strong> O(log n) - Halveert de zoekruimte
          bij elke iteratie
        </p>
        <p className="mb-3">
          <strong>Voordelen:</strong> Veel sneller dan lineair zoeken voor grote
          datasets
        </p>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">
          Sorted Array (comma-separated):
        </label>
        <input
          type="text"
          value={arrayInput}
          onChange={(e) => setArrayInput(e.target.value)}
          className="w-full p-2 border border-white/30 rounded bg-white/20 text-white placeholder-white/70"
          placeholder="e.g., 1,3,5,7,9,11"
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
        onClick={handleSearch}
        className="bg-white/20 text-white px-4 py-2 rounded hover:bg-white/30 transition-all shadow-md"
      >
        Search
      </button>
      <div className="mt-4">
        <strong>Result:</strong>{" "}
        {result !== null ? `Found at index ${result}` : "Not found"}
      </div>
    </div>
  );
};

export default BinarySearch;
