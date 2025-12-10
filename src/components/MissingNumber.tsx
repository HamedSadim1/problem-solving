import React, { useState } from "react";

const MissingNumber = () => {
  const [arrayInput, setArrayInput] = useState<string>("3,0,1");
  const [result, setResult] = useState<number | null>(null);

  const missingNumber = (nums: number[]): number => {
    const n = nums.length;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = nums.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
  };

  const handleFind = () => {
    const arr = arrayInput
      .split(",")
      .map((n) => parseInt(n.trim()))
      .filter((n) => !isNaN(n));
    setResult(missingNumber(arr));
  };

  return (
    <div className="p-6 bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-white/20 text-white">
      <h2 className="text-2xl font-bold mb-4">Missing Number</h2>
      <div className="mb-6">
        <p className="mb-3">
          <strong>Probleem:</strong> Vind het ontbrekende getal in een array die
          n verschillende getallen bevat genomen van 0 tot n.
        </p>
        <p className="mb-3">
          <strong>Voorbeeld:</strong> Array = [3, 0, 1]
          <br />
          Verwacht bereik: 0, 1, 2, 3<br />
          Ontbrekend: 2
        </p>
        <p className="mb-3">
          <strong>Voorbeeld:</strong> Array = [0, 1]
          <br />
          Verwacht bereik: 0, 1, 2<br />
          Ontbrekend: 2
        </p>
        <p className="mb-3">
          <strong>Benadering:</strong> Wiskundige formule
        </p>
        <ul className="list-disc list-inside mb-3 ml-4">
          <li>Bereken verwachte som: n(n+1)/2</li>
          <li>Bereken werkelijke som van array</li>
          <li>Verschil = ontbrekende getal</li>
        </ul>
        <p className="mb-3">
          <strong>Tijdcomplexiteit:</strong> O(n) - Enkele pass voor som
          berekening
        </p>
        <p className="mb-3">
          <strong>Alternatieve aanpakken:</strong>
        </p>
        <ul className="list-disc list-inside mb-3 ml-4">
          <li>HashSet: O(n) tijd, O(n) ruimte</li>
          <li>Bit manipulatie (XOR): O(n) tijd, O(1) extra ruimte</li>
        </ul>
        <p className="mb-3">
          <strong>Constraints:</strong> Array bevat unieke getallen van 0 tot n,
          één getal ontbreekt
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
          placeholder="e.g., 3,0,1"
        />
      </div>
      <button
        onClick={handleFind}
        className="bg-white/20 text-white px-4 py-2 rounded hover:bg-white/30 transition-all shadow-md"
      >
        Find Missing Number
      </button>
      <div className="mt-4">
        <strong>Result:</strong> {result !== null ? result : ""}
      </div>
    </div>
  );
};

export default MissingNumber;
