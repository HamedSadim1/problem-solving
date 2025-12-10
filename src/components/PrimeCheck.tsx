import React, { useState } from "react";

const PrimeCheck = () => {
  const [n, setN] = useState<number>(17);
  const [result, setResult] = useState<boolean | null>(null);

  const isPrime = (num: number): boolean => {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  };

  const handleCheck = () => {
    setResult(isPrime(n));
  };

  return (
    <div className="p-6 bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-white/20 text-white">
      <h2 className="text-2xl font-bold mb-4">Prime Check</h2>
      <div className="mb-6">
        <p className="mb-3">
          <strong>Probleem:</strong> Controleer of een getal een priemgetal is.
        </p>
        <p className="mb-3">
          <strong>Wat is een priemgetal?</strong> Een getal groter dan 1 dat
          alleen deelbaar is door 1 en zichzelf.
        </p>
        <p className="mb-3">
          <strong>Voorbeeld:</strong> 17 → true (priem)
          <br />
          18 → false (deelbaar door 2, 3, 6, 9)
        </p>
        <p className="mb-3">
          <strong>Optimisaties:</strong>
        </p>
        <ul className="list-disc list-inside mb-3 ml-4">
          <li>Controleer alleen delers tot √n</li>
          <li>Elimineer even getallen &gt; 2</li>
          <li>Elimineer veelvouden van 3</li>
          <li>6k±1 patroon voor efficiëntie</li>
        </ul>
        <p className="mb-3">
          <strong>Tijdcomplexiteit:</strong> O(√n) - Veel sneller dan O(n)
        </p>
        <p className="mb-3">
          <strong>Speciale gevallen:</strong>
        </p>
        <ul className="list-disc list-inside mb-3 ml-4">
          <li>1: niet priem</li>
          <li>2: wel priem (enige even priem)</li>
          <li>3: wel priem</li>
        </ul>
        <p className="mb-3">
          <strong>Toepassingen:</strong> Cryptografie, hashing, willekeurige
          getallen generatie
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
        onClick={handleCheck}
        className="bg-white/20 text-white px-4 py-2 rounded hover:bg-white/30 transition-all shadow-md"
      >
        Check Prime
      </button>
      <div className="mt-4">
        <strong>Result:</strong>{" "}
        {result !== null
          ? result
            ? `${n} is prime`
            : `${n} is not prime`
          : ""}
      </div>
    </div>
  );
};

export default PrimeCheck;
