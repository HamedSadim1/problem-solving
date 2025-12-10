import React, { useState } from "react";

const Factorial = () => {
  const [n, setN] = useState<number>(5);
  const [result, setResult] = useState<number | null>(null);

  const calculateFactorial = (num: number): number => {
    if (num < 0) return 0;
    if (num === 0 || num === 1) return 1;
    let fact = 1;
    for (let i = 2; i <= num; i++) {
      fact *= i;
    }
    return fact;
  };

  const handleCalculate = () => {
    setResult(calculateFactorial(n));
  };

  return (
    <div className="p-6 bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-white/20 text-white">
      <h2 className="text-2xl font-bold mb-4">Factorial</h2>
      <div className="mb-6">
        <p className="mb-3">
          <strong>Probleem:</strong> Bereken de faculteit van een getal (n!).
        </p>
        <p className="mb-3">
          <strong>Faculteit definitie:</strong> n! = n × (n-1) × (n-2) × ... × 1
        </p>
        <p className="mb-3">
          <strong>Voorbeeld:</strong> 5! = 5 × 4 × 3 × 2 × 1 = 120
        </p>
        <p className="mb-3">
          <strong>Base cases:</strong>
        </p>
        <ul className="list-disc list-inside mb-3 ml-4">
          <li>0! = 1</li>
          <li>1! = 1</li>
          <li>Negatieve getallen: niet gedefinieerd</li>
        </ul>
        <p className="mb-3">
          <strong>Benadering:</strong> Iteratieve vermenigvuldiging
        </p>
        <p className="mb-3">
          <strong>Alternatieve aanpakken:</strong>
        </p>
        <ul className="list-disc list-inside mb-3 ml-4">
          <li>Recursie: n! = n × (n-1)!</li>
          <li>Memoization voor herhalende berekeningen</li>
        </ul>
        <p className="mb-3">
          <strong>Tijdcomplexiteit:</strong> O(n) - Lineair in n
        </p>
        <p className="mb-3">
          <strong>Toepassingen:</strong> Combinatoriek, waarschijnlijkheid,
          algoritmes
        </p>
        <p className="mb-3">
          <strong>Beperkingen:</strong> Groeit zeer snel, overflow bij grote n
        </p>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Number:</label>
        <input
          type="number"
          value={n}
          onChange={(e) => setN(parseInt(e.target.value))}
          className="w-full p-2 border border-white/30 rounded bg-white/20 text-white"
          min="0"
        />
      </div>
      <button
        onClick={handleCalculate}
        className="bg-white/20 text-white px-4 py-2 rounded hover:bg-white/30 transition-all shadow-md"
      >
        Calculate Factorial
      </button>
      <div className="mt-4">
        <strong>Result:</strong> {result !== null ? `${n}! = ${result}` : ""}
      </div>
    </div>
  );
};

export default Factorial;
