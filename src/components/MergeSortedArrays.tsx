import React, { useState } from "react";

const MergeSortedArrays = () => {
  const [array1Input, setArray1Input] = useState<string>("1,3,5");
  const [array2Input, setArray2Input] = useState<string>("2,4,6");
  const [result, setResult] = useState<number[]>([]);

  const mergeSortedArrays = (nums1: number[], nums2: number[]): number[] => {
    const merged: number[] = [];
    let i = 0,
      j = 0;
    while (i < nums1.length && j < nums2.length) {
      if (nums1[i] < nums2[j]) {
        merged.push(nums1[i]);
        i++;
      } else {
        merged.push(nums2[j]);
        j++;
      }
    }
    while (i < nums1.length) {
      merged.push(nums1[i]);
      i++;
    }
    while (j < nums2.length) {
      merged.push(nums2[j]);
      j++;
    }
    return merged;
  };

  const handleMerge = () => {
    const arr1 = array1Input
      .split(",")
      .map((n) => parseInt(n.trim()))
      .filter((n) => !isNaN(n));
    const arr2 = array2Input
      .split(",")
      .map((n) => parseInt(n.trim()))
      .filter((n) => !isNaN(n));
    setResult(mergeSortedArrays(arr1, arr2));
  };

  return (
    <div className="p-6 bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-white/20 text-white">
      <h2 className="text-2xl font-bold mb-4">Merge Two Sorted Arrays</h2>
      <div className="mb-6">
        <p className="mb-3">
          <strong>Probleem:</strong> Voeg twee gesorteerde arrays samen tot één
          gesorteerde array.
        </p>
        <p className="mb-3">
          <strong>Voorbeeld:</strong> [1,3,5] en [2,4,6]
          <br />
          Resultaat: [1,2,3,4,5,6]
        </p>
        <p className="mb-3">
          <strong>Voorbeeld:</strong> [1,2,4] en [1,3,4]
          <br />
          Resultaat: [1,1,2,3,4,4]
        </p>
        <p className="mb-3">
          <strong>Benadering:</strong> Two-pointer techniek
        </p>
        <ul className="list-disc list-inside mb-3 ml-4">
          <li>Gebruik twee pointers voor beide arrays</li>
          <li>Vergelijk elementen en voeg kleinste toe</li>
          <li>Voeg resterende elementen toe</li>
        </ul>
        <p className="mb-3">
          <strong>Tijdcomplexiteit:</strong> O(m + n) waar m en n de lengtes
          zijn
        </p>
        <p className="mb-3">
          <strong>Ruimtecomplexiteit:</strong> O(m + n) voor nieuwe array
        </p>
        <p className="mb-3">
          <strong>Toepassingen:</strong> Merge sort algoritme, database queries,
          data aggregatie
        </p>
        <p className="mb-3">
          <strong>Voordelen:</strong> Efficiënt voor grote gesorteerde datasets
        </p>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">
          First Array (comma-separated):
        </label>
        <input
          type="text"
          value={array1Input}
          onChange={(e) => setArray1Input(e.target.value)}
          className="w-full p-2 border border-white/30 rounded bg-white/20 text-white placeholder-white/70"
          placeholder="e.g., 1,3,5"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">
          Second Array (comma-separated):
        </label>
        <input
          type="text"
          value={array2Input}
          onChange={(e) => setArray2Input(e.target.value)}
          className="w-full p-2 border border-white/30 rounded bg-white/20 text-white placeholder-white/70"
          placeholder="e.g., 2,4,6"
        />
      </div>
      <button
        onClick={handleMerge}
        className="bg-white/20 text-white px-4 py-2 rounded hover:bg-white/30 transition-all shadow-md"
      >
        Merge Arrays
      </button>
      <div className="mt-4">
        <strong>Merged Array:</strong> [{result.join(", ")}]
      </div>
    </div>
  );
};

export default MergeSortedArrays;
