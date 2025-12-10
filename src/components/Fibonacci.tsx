import React, { useState } from "react";

const Fibonacci = () => {
  const [n, setN] = useState<number>(10);
  const [sequence, setSequence] = useState<number[]>([]);

  const generateFibonacci = () => {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    setSequence(fib.slice(0, n));
  };

  return (
    <div className="p-6 bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-white/20 text-white">
      <h2 className="text-2xl font-bold mb-4">Fibonacci Sequence</h2>
      <div className="mb-6">
        <p className="mb-3">
          <strong>Probleem:</strong> Genereer de eerste n getallen van de
          Fibonacci reeks.
        </p>
        <p className="mb-3">
          <strong>Fibonacci reeks:</strong> Elke term is de som van de twee
          voorgaande termen.
          <br />
          F(0) = 0, F(1) = 1, F(2) = 1, F(3) = 2, F(4) = 3, F(5) = 5, etc.
        </p>
        <p className="mb-3">
          <strong>Voorbeeld:</strong> n = 5<br />
          Resultaat: [0, 1, 1, 2, 3]
        </p>
        <p className="mb-3">
          <strong>Toepassingen:</strong>
        </p>
        <ul className="list-disc list-inside mb-3 ml-4">
          <li>Natuurlijke groei patronen</li>
          <li>Financiële modellen</li>
          <li>Computer algoritmen</li>
          <li>Golden ratio berekeningen</li>
        </ul>
        <p className="mb-3">
          <strong>Tijdcomplexiteit:</strong> O(n) - Lineair in het aantal termen
        </p>
        <p className="mb-3">
          <strong>Alternatieve aanpakken:</strong> Recursie (O(2^n) -
          inefficiënt), Matrix exponentiatie (O(log n))
        </p>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">
          Number of terms:
        </label>
        <input
          type="number"
          value={n}
          onChange={(e) => setN(parseInt(e.target.value))}
          className="w-full p-2 border border-white/30 rounded bg-white/20 text-white"
          min="1"
        />
      </div>
      <button
        onClick={generateFibonacci}
        className="bg-white/20 text-white px-4 py-2 rounded hover:bg-white/30 transition-all shadow-md"
      >
        Generate
      </button>
      <div className="mt-4">
        <strong>Sequence:</strong> [{sequence.join(", ")}]
      </div>
    </div>
  );
};

export default Fibonacci;
