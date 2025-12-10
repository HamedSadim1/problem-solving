import React, { useState } from "react";

const AnagramCheck = () => {
  const [str1, setStr1] = useState<string>("listen");
  const [str2, setStr2] = useState<string>("silent");
  const [result, setResult] = useState<boolean | null>(null);

  const isAnagram = (s1: string, s2: string): boolean => {
    if (s1.length !== s2.length) return false;
    const sorted1 = s1.toLowerCase().split("").sort().join("");
    const sorted2 = s2.toLowerCase().split("").sort().join("");
    return sorted1 === sorted2;
  };

  const handleCheck = () => {
    setResult(isAnagram(str1, str2));
  };

  return (
    <div className="p-6 bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-white/20 text-white">
      <h2 className="text-2xl font-bold mb-4">Anagram Check</h2>
      <div className="mb-6">
        <p className="mb-3">
          <strong>Probleem:</strong> Controleer of twee strings anagrammen zijn
          (bevatten dezelfde karakters in verschillende volgorde).
        </p>
        <p className="mb-3">
          <strong>Voorbeeld:</strong> "listen" en "silent" → true
          <br />
          "evil" en "vile" → true
        </p>
        <p className="mb-3">
          <strong>Voorbeeld:</strong> "hello" en "world" → false
        </p>
        <p className="mb-3">
          <strong>Benadering:</strong> Sorteer beide strings en vergelijk
        </p>
        <ul className="list-disc list-inside mb-3 ml-4">
          <li>Converteer naar lowercase</li>
          <li>Sorteer karakters alfabetisch</li>
          <li>Vergelijk gesorteerde strings</li>
        </ul>
        <p className="mb-3">
          <strong>Alternatieve aanpakken:</strong>
        </p>
        <ul className="list-disc list-inside mb-3 ml-4">
          <li>Frequency count: tel voorkomen van elk karakter</li>
          <li>Hash map voor karakter frequenties</li>
        </ul>
        <p className="mb-3">
          <strong>Tijdcomplexiteit:</strong> O(n log n) voor sorteren, O(n) voor
          frequency count
        </p>
        <p className="mb-3">
          <strong>Toepassingen:</strong> Woordspellen, cryptografie,
          tekstanalyse
        </p>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">First String:</label>
        <input
          type="text"
          value={str1}
          onChange={(e) => setStr1(e.target.value)}
          className="w-full p-2 border border-white/30 rounded bg-white/20 text-white placeholder-white/70"
          placeholder="e.g., listen"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Second String:</label>
        <input
          type="text"
          value={str2}
          onChange={(e) => setStr2(e.target.value)}
          className="w-full p-2 border border-white/30 rounded bg-white/20 text-white placeholder-white/70"
          placeholder="e.g., silent"
        />
      </div>
      <button
        onClick={handleCheck}
        className="bg-white/20 text-white px-4 py-2 rounded hover:bg-white/30 transition-all shadow-md"
      >
        Check Anagram
      </button>
      <div className="mt-4">
        <strong>Result:</strong>{" "}
        {result !== null
          ? result
            ? "Yes, they are anagrams"
            : "No, they are not anagrams"
          : ""}
      </div>
    </div>
  );
};

export default AnagramCheck;
