import React, { useState } from "react";

const RomanToInteger = () => {
  const [roman, setRoman] = useState<string>("III");
  const [result, setResult] = useState<number | null>(null);

  const romanToInt = (s: string): number => {
    const map: { [key: string]: number } = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
    let total = 0;
    for (let i = 0; i < s.length; i++) {
      const current = map[s[i]];
      const next = map[s[i + 1]];
      if (next && current < next) {
        total -= current;
      } else {
        total += current;
      }
    }
    return total;
  };

  const handleConvert = () => {
    setResult(romanToInt(roman.toUpperCase()));
  };

  return (
    <div className="p-6 bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-white/20 text-white">
      <h2 className="text-2xl font-bold mb-4">Roman to Integer</h2>
      <div className="mb-6">
        <p className="mb-3">
          <strong>Probleem:</strong> Converteer een Romeins cijfer naar een
          integer.
        </p>
        <p className="mb-3">
          <strong>Romeinse cijfers:</strong>
        </p>
        <ul className="list-disc list-inside mb-3 ml-4">
          <li>I = 1, V = 5, X = 10</li>
          <li>L = 50, C = 100, D = 500</li>
          <li>M = 1000</li>
        </ul>
        <p className="mb-3">
          <strong>Voorbeeld:</strong> "III" = 3<br />
          "IV" = 4 (5 - 1)
          <br />
          "IX" = 9 (10 - 1)
        </p>
        <p className="mb-3">
          <strong>Voorbeeld:</strong> "LVIII" = 58
          <br />
          "MCMXCIV" = 1994
        </p>
        <p className="mb-3">
          <strong>Regel:</strong> Als kleiner cijfer voor groter cijfer staat,
          trek af
        </p>
        <p className="mb-3">
          <strong>Benadering:</strong> Van links naar rechts itereren
        </p>
        <ul className="list-disc list-inside mb-3 ml-4">
          <li>Kijk naar huidig en volgende cijfer</li>
          <li>Als huidig &lt; volgende: trek af</li>
          <li>Anders: tel op</li>
        </ul>
        <p className="mb-3">
          <strong>Tijdcomplexiteit:</strong> O(n) - Lineair in lengte van string
        </p>
        <p className="mb-3">
          <strong>Toepassingen:</strong> Historische data, kalenders, nummering
          systemen
        </p>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Roman Numeral:</label>
        <input
          type="text"
          value={roman}
          onChange={(e) => setRoman(e.target.value)}
          className="w-full p-2 border border-white/30 rounded bg-white/20 text-white placeholder-white/70"
          placeholder="e.g., III"
        />
      </div>
      <button
        onClick={handleConvert}
        className="bg-white/20 text-white px-4 py-2 rounded hover:bg-white/30 transition-all shadow-md"
      >
        Convert
      </button>
      <div className="mt-4">
        <strong>Result:</strong> {result !== null ? result : ""}
      </div>
    </div>
  );
};

export default RomanToInteger;
