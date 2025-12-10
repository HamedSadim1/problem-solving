import React, { useState } from "react";

const ReverseArray = () => {
  const [arrayInput, setArrayInput] = useState<string>("1,2,3,4,5");
  const [result, setResult] = useState<number[]>([]);

  const reverseArray = () => {
    const arr = arrayInput
      .split(",")
      .map((n) => parseInt(n.trim()))
      .filter((n) => !isNaN(n));
    setResult(arr.reverse());
  };

  return (
    <div className="p-6 bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-white/20 text-white">
      <h2 className="text-2xl font-bold mb-4">Reverse Array</h2>
      <div className="mb-6">
        <p className="mb-3">
          <strong>Probleem:</strong> Keer de volgorde van elementen in een array
          om.
        </p>
        <p className="mb-3">
          <strong>Voorbeeld:</strong> Input = [1, 2, 3, 4, 5]
          <br />
          Output = [5, 4, 3, 2, 1]
        </p>
        <p className="mb-3">
          <strong>Built-in oplossing:</strong> Gebruik array.reverse() in
          JavaScript
        </p>
        <p className="mb-3">
          <strong>Handmatige implementatie:</strong>
        </p>
        <ul className="list-disc list-inside mb-3 ml-4">
          <li>Two-pointer aanpak: wissel elementen van begin en eind</li>
          <li>Iteratieve omwisseling</li>
          <li>Recursie (minder efficiënt)</li>
        </ul>
        <p className="mb-3">
          <strong>Tijdcomplexiteit:</strong> O(n) - Elk element wordt één keer
          bewerkt
        </p>
        <p className="mb-3">
          <strong>Ruimtecomplexiteit:</strong> O(1) extra ruimte (in-place
          modificatie)
        </p>
        <p className="mb-3">
          <strong>Toepassingen:</strong> Stack operaties, string manipulatie,
          data transformatie
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
      <button
        onClick={reverseArray}
        className="bg-white/20 text-white px-4 py-2 rounded hover:bg-white/30 transition-all shadow-md"
      >
        Reverse Array
      </button>
      <div className="mt-4">
        <strong>Original:</strong> [{arrayInput.split(",").join(", ")}]
      </div>
      <div className="mt-2">
        <strong>Reversed:</strong> [{result.join(", ")}]
      </div>
    </div>
  );
};

export default ReverseArray;
