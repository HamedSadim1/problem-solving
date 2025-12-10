import React, { useState } from "react";

const RemoveDuplicates = () => {
  const [arrayInput, setArrayInput] = useState<string>("1,1,2,2,3,4,4,5");
  const [result, setResult] = useState<number[]>([]);
  const [length, setLength] = useState<number | null>(null);

  const removeDuplicates = (nums: number[]): number => {
    if (nums.length === 0) return 0;
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
      if (nums[j] !== nums[i]) {
        i++;
        nums[i] = nums[j];
      }
    }
    return i + 1;
  };

  const handleRemove = () => {
    const arr = arrayInput
      .split(",")
      .map((n) => parseInt(n.trim()))
      .filter((n) => !isNaN(n));
    const newLength = removeDuplicates([...arr]);
    setResult(arr.slice(0, newLength));
    setLength(newLength);
  };

  return (
    <div className="p-6 bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-white/20 text-white">
      <h2 className="text-2xl font-bold mb-4">
        Remove Duplicates from Sorted Array
      </h2>
      <div className="mb-6">
        <p className="mb-3">
          <strong>Probleem:</strong> Verwijder duplicaten in-place uit een
          gesorteerde array en geef de nieuwe lengte terug.
        </p>
        <p className="mb-3">
          <strong>Voorbeeld:</strong> Input = [1,1,2,2,3,4,4,5]
          <br />
          Output = [1,2,3,4,5], Lengte = 5
        </p>
        <p className="mb-3">
          <strong>Voorwaarde:</strong> Array moet gesorteerd zijn
        </p>
        <p className="mb-3">
          <strong>Benadering:</strong> Two-pointer techniek
        </p>
        <ul className="list-disc list-inside mb-3 ml-4">
          <li>Gebruik slow pointer voor unieke elementen</li>
          <li>Gebruik fast pointer om array te doorlopen</li>
          <li>Verschuif alleen wanneer nieuw uniek element gevonden</li>
        </ul>
        <p className="mb-3">
          <strong>Tijdcomplexiteit:</strong> O(n) - Enkele pass door de array
        </p>
        <p className="mb-3">
          <strong>Ruimtecomplexiteit:</strong> O(1) - In-place modificatie
        </p>
        <p className="mb-3">
          <strong>Toepassingen:</strong> Data opschoning, array compressie,
          geheugen optimalisatie
        </p>
        <p className="mb-3">
          <strong>Alternatieve aanpak:</strong> HashSet voor niet-gesorteerde
          arrays (O(n) ruimte)
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
          placeholder="e.g., 1,1,2,2,3,4,4,5"
        />
      </div>
      <button
        onClick={handleRemove}
        className="bg-white/20 text-white px-4 py-2 rounded hover:bg-white/30 transition-all shadow-md"
      >
        Remove Duplicates
      </button>
      <div className="mt-4">
        <strong>New Length:</strong> {length}
      </div>
      <div className="mt-2">
        <strong>Array:</strong> [{result.join(", ")}]
      </div>
    </div>
  );
};

export default RemoveDuplicates;
