import React, { useState } from "react";

const MiddleIndex = () => {
  const [arrayInput, setArrayInput] = useState<string>("1,2,3,4,5,6");
  const [middleIndex, setMiddleIndex] = useState<number | null>(null);

  const handleFindMiddleIndex = () => {
    const arr = arrayInput
      .split(",")
      .map((n) => parseInt(n.trim()))
      .filter((n) => !isNaN(n));
    const mid = Math.floor(arr.length / 2);
    setMiddleIndex(mid);
  };

  return (
    <div className="p-6 bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-white/20 text-white">
      <h2 className="text-2xl font-bold mb-4">Middle Index</h2>
      <div className="mb-6">
        <p className="mb-3">
          <strong>Probleem:</strong> Vind de middelste index van een array.
        </p>
        <p className="mb-3">
          <strong>Voorbeeld:</strong> Array = [1, 2, 3, 4, 5]
          <br />
          Lengte = 5, Middelste index = Math.floor(5/2) = 2<br />
          Resultaat: 2 (element 3)
        </p>
        <p className="mb-3">
          <strong>Voorbeeld:</strong> Array = [1, 2, 3, 4, 5, 6]
          <br />
          Lengte = 6, Middelste index = Math.floor(6/2) = 3<br />
          Resultaat: 3 (element 4)
        </p>
        <p className="mb-3">
          <strong>Voor even lengtes:</strong> Er is geen exact midden, neem de
          hogere index (rechts van centrum)
        </p>
        <p className="mb-3">
          <strong>Voor oneven lengtes:</strong> Exact centrum
        </p>
        <p className="mb-3">
          <strong>Tijdcomplexiteit:</strong> O(1) - Alleen lengte nodig
        </p>
        <p className="mb-3">
          <strong>Toepassingen:</strong> Array splitsen, mediaan vinden,
          zoekalgoritmes
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
          placeholder="e.g., 1,2,3,4,5,6"
        />
      </div>
      <button
        onClick={handleFindMiddleIndex}
        className="bg-white/20 text-white px-4 py-2 rounded hover:bg-white/30 transition-all shadow-md"
      >
        Find Middle Index
      </button>
      <div className="mt-4">
        <strong>Result:</strong> {middleIndex !== null ? middleIndex : ""}
      </div>
    </div>
  );
};

export default MiddleIndex;
