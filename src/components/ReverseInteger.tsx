import React, { useState } from "react";

const ReverseInteger = () => {
  const [n, setN] = useState<number>(123);
  const [result, setResult] = useState<number | null>(null);

  const reverse = (x: number): number => {
    const sign = x < 0 ? -1 : 1;
    const reversed = parseInt(
      Math.abs(x).toString().split("").reverse().join("")
    );
    if (reversed > 2 ** 31 - 1) return 0;
    return sign * reversed;
  };

  const handleReverse = () => {
    setResult(reverse(n));
  };

  return (
    <div className="p-6 bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-white/20 text-white">
      <h2 className="text-2xl font-bold mb-4">Reverse Integer</h2>
      <div className="mb-6">
        <p className="mb-3">
          <strong>Probleem:</strong> Keer de cijfers van een integer om.
        </p>
        <p className="mb-3">
          <strong>Voorbeeld:</strong> Input = 123
          <br />
          Resultaat: 321
        </p>
        <p className="mb-3">
          <strong>Voorbeeld:</strong> Input = -123
          <br />
          Resultaat: -321
        </p>
        <p className="mb-3">
          <strong>Edge cases:</strong>
        </p>
        <ul className="list-disc list-inside mb-3 ml-4">
          <li>Leading zeros worden genegeerd (12300 → 321)</li>
          <li>
            Als omgekeerde buiten 32-bit signed integer range valt: return 0
          </li>
          <li>Negatieve getallen behouden hun teken</li>
        </ul>
        <p className="mb-3">
          <strong>Benadering:</strong> Converteer naar string, keer om,
          converteer terug naar number
        </p>
        <p className="mb-3">
          <strong>Tijdcomplexiteit:</strong> O(log n) - Aantal cijfers is
          logaritmisch
        </p>
        <p className="mb-3">
          <strong>Alternatieve aanpak:</strong> Wiskundige manipulatie zonder
          string conversie
        </p>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Number:</label>
        <input
          type="number"
          value={n}
          onChange={(e) => setN(parseInt(e.target.value))}
          className="w-full p-2 border border-white/30 rounded bg-white/20 text-white"
        />
      </div>
      <button
        onClick={handleReverse}
        className="bg-white/20 text-white px-4 py-2 rounded hover:bg-white/30 transition-all shadow-md"
      >
        Reverse Integer
      </button>
      <div className="mt-4">
        <strong>Result:</strong> {result !== null ? result : ""}
      </div>
    </div>
  );
};

export default ReverseInteger;
