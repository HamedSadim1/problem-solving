import React, { useState } from "react";

const CountPrimes = () => {
  const [n, setN] = useState<number>(10);
  const [result, setResult] = useState<number | null>(null);

  const countPrimes = (n: number): number => {
    if (n <= 2) return 0;
    const isPrime = new Array(n).fill(true);
    isPrime[0] = isPrime[1] = false;
    for (let i = 2; i * i < n; i++) {
      if (isPrime[i]) {
        for (let j = i * i; j < n; j += i) {
          isPrime[j] = false;
        }
      }
    }
    return isPrime.filter(Boolean).length;
  };

  const handleCount = () => {
    setResult(countPrimes(n));
  };

  return (
    <div className="p-6 bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-white/20 text-white">
      <h2 className="text-2xl font-bold mb-4">Count Primes</h2>
      <div className="mb-6">
        <p className="mb-3">
          <strong>Probleem:</strong> Tel het aantal priemgetallen kleiner dan n.
        </p>
        <p className="mb-3">
          <strong>Wat is een priemgetal?</strong> Een getal groter dan 1 dat
          alleen deelbaar is door 1 en zichzelf.
        </p>
        <p className="mb-3">
          <strong>Voorbeeld:</strong> n = 10
          <br />
          Priemgetallen: 2, 3, 5, 7<br />
          Resultaat: 4
        </p>
        <p className="mb-3">
          <strong>Algoritme:</strong> Sieve of Eratosthenes
        </p>
        <ul className="list-disc list-inside mb-3 ml-4">
          <li>Maak een boolean array voor alle getallen tot n</li>
          <li>Markeer veelvouden van elk priemgetal als niet-priem</li>
          <li>Tel de overgebleven true waarden</li>
        </ul>
        <p className="mb-3">
          <strong>Tijdcomplexiteit:</strong> O(n log log n) - Zeer efficiënt
          voor grote n
        </p>
        <p className="mb-3">
          <strong>Ruimtecomplexiteit:</strong> O(n) - Boolean array van grootte
          n
        </p>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Number:</label>
        <input
          type="number"
          value={n}
          onChange={(e) => setN(parseInt(e.target.value))}
          className="w-full p-2 border border-white/30 rounded bg-white/20 text-white"
          min="1"
        />
      </div>
      <button
        onClick={handleCount}
        className="bg-white/20 text-white px-4 py-2 rounded hover:bg-white/30 transition-all shadow-md"
      >
        Count Primes
      </button>
      <div className="mt-4">
        <strong>Result:</strong> {result !== null ? result : ""}
      </div>
    </div>
  );
};

export default CountPrimes;
