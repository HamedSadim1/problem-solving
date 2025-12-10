import React, { useState } from "react";

const ClimbingStairs = () => {
  const [n, setN] = useState<number>(5);
  const [result, setResult] = useState<number | null>(null);

  const climbStairs = (n: number): number => {
    if (n <= 1) return 1;
    let prev = 1,
      curr = 1;
    for (let i = 2; i <= n; i++) {
      const temp = curr;
      curr = prev + curr;
      prev = temp;
    }
    return curr;
  };

  const handleCalculate = () => {
    setResult(climbStairs(n));
  };

  return (
    <div className="p-6 bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-white/20 text-white">
      <h2 className="text-2xl font-bold mb-4">Climbing Stairs</h2>
      <div className="mb-6">
        <p className="mb-3">
          <strong>Probleem:</strong> Bereken het aantal verschillende manieren
          om n trappen te beklimmen (1 of 2 stappen per keer).
        </p>
        <p className="mb-3">
          <strong>Voorbeeld:</strong> n = 3<br />
          Manieren: [1,1,1], [1,2], [2,1]
          <br />
          Resultaat: 3
        </p>
        <p className="mb-3">
          <strong>Voorbeeld:</strong> n = 4<br />
          Manieren: [1,1,1,1], [1,1,2], [1,2,1], [2,1,1], [2,2]
          <br />
          Resultaat: 5
        </p>
        <p className="mb-3">
          <strong>Patroon:</strong> Dit is de Fibonacci reeks!
        </p>
        <ul className="list-disc list-inside mb-3 ml-4">
          <li>F(1) = 1, F(2) = 2, F(3) = 3, F(4) = 5, etc.</li>
          <li>Elk getal is som van vorige twee</li>
        </ul>
        <p className="mb-3">
          <strong>Benadering:</strong> Iteratieve Fibonacci berekening
        </p>
        <p className="mb-3">
          <strong>Tijdcomplexiteit:</strong> O(n) - Lineair in aantal trappen
        </p>
        <p className="mb-3">
          <strong>Ruimtecomplexiteit:</strong> O(1) - Constante ruimte
        </p>
        <p className="mb-3">
          <strong>Toepassingen:</strong> Optimalisatie problemen, combinatoriek,
          pad vinden
        </p>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">
          Number of stairs:
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
        onClick={handleCalculate}
        className="bg-white/20 text-white px-4 py-2 rounded hover:bg-white/30 transition-all shadow-md"
      >
        Calculate Ways
      </button>
      <div className="mt-4">
        <strong>Result:</strong> {result !== null ? `${result} ways` : ""}
      </div>
    </div>
  );
};

export default ClimbingStairs;
