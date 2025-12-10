import React, { useState } from "react";

export const FindPovetIndex = () => {
  const [arrayInput, setArrayInput] = useState<string>("1,7,3,6,5,6");
  const [pivotIndex, setPivotIndex] = useState<number | null>(null);

  const handlePovetIndex = () => {
    const arr = arrayInput
      .split(",")
      .map((n) => parseInt(n.trim()))
      .filter((n) => !isNaN(n));
    let leftSum = 0;
    let rightSum = arr.reduce((acc, cur) => acc + cur, 0);
    let index = -1;
    for (let i = 0; i < arr.length; i++) {
      rightSum -= arr[i];
      if (leftSum === rightSum) {
        index = i;
        break;
      }
      leftSum += arr[i];
    }
    setPivotIndex(index !== -1 ? index : null);
  };

  return (
    <div className="p-6 bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-white/20 text-white">
      <h2 className="text-2xl font-bold mb-4">Pivot Index</h2>
      <div className="mt-6 p-4 bg-white/5 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Problem Information</h3>
        <div className="space-y-2 text-sm">
          <p>
            <strong>Probleem:</strong> Vind de pivot index waar de som van de
            elementen links gelijk is aan de som rechts.
          </p>
          <p>
            <strong>Voorbeeld:</strong> Array = [1, 7, 3, 6, 5, 6]
            <br />
            Bij index 3: Links = [1,7,3] som=11, Rechts=[5,6] som=11
            <br />
            Resultaat: 3
          </p>
          <p>
            <strong>Voorbeeld:</strong> Array = [1, 2, 3]
            <br />
            Geen index waar links = rechts
            <br />
            Resultaat: -1
          </p>
          <p>
            <strong>Benadering:</strong>
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Bereken totale som van array</li>
            <li>Itereer door array, houd links som bij</li>
            <li>Rechts som = totaal - links - huidig element</li>
            <li>Vergelijk links en rechts som</li>
          </ul>
          <p>
            <strong>Tijdcomplexiteit:</strong> O(n) - Enkele pass door de array
          </p>
          <p>
            <strong>Ruimtecomplexiteit:</strong> O(1) - Behalve input array
          </p>
          <p>
            <strong>Edge cases:</strong> Lege array, geen pivot index, meerdere
            mogelijke indices (geef eerste)
          </p>
        </div>
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
          placeholder="e.g., 1,7,3,6,5,6"
        />
      </div>
      <button
        onClick={handlePovetIndex}
        className="bg-white/20 text-white px-4 py-2 rounded hover:bg-white/30 transition-all shadow-md"
      >
        Find Pivot Index
      </button>
      <div className="mt-4">
        <strong>Result:</strong>{" "}
        {pivotIndex !== null ? pivotIndex : "No pivot index found"}
      </div>
    </div>
  );
};

export default FindPovetIndex;
