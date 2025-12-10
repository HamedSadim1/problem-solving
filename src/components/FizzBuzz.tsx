import React, { useState } from "react";

const FizzBuzz = () => {
  const [n, setN] = useState<number>(15);
  const [result, setResult] = useState<string[]>([]);

  const fizzBuzz = (n: number): string[] => {
    const result: string[] = [];
    for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        result.push("FizzBuzz");
      } else if (i % 3 === 0) {
        result.push("Fizz");
      } else if (i % 5 === 0) {
        result.push("Buzz");
      } else {
        result.push(i.toString());
      }
    }
    return result;
  };

  const handleGenerate = () => {
    setResult(fizzBuzz(n));
  };

  return (
    <div className="p-6 bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-white/20 text-white">
      <h2 className="text-2xl font-bold mb-4">Fizz Buzz</h2>
      <div className="mb-6">
        <p className="mb-3">
          <strong>Probleem:</strong> Genereer een FizzBuzz reeks tot n.
        </p>
        <p className="mb-3">
          <strong>Regels:</strong>
        </p>
        <ul className="list-disc list-inside mb-3 ml-4">
          <li>Als getal deelbaar door 3: "Fizz"</li>
          <li>Als getal deelbaar door 5: "Buzz"</li>
          <li>Als getal deelbaar door beide: "FizzBuzz"</li>
          <li>Anders: het getal zelf</li>
        </ul>
        <p className="mb-3">
          <strong>Voorbeeld:</strong> n = 5<br />
          Resultaat: ["1", "2", "Fizz", "4", "Buzz"]
        </p>
        <p className="mb-3">
          <strong>Voorbeeld:</strong> n = 15
          <br />
          Resultaat: ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz",
          "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]
        </p>
        <p className="mb-3">
          <strong>Toepassingen:</strong> Klassiek interview vraag om basis
          programmeervaardigheden te testen
        </p>
        <p className="mb-3">
          <strong>Tijdcomplexiteit:</strong> O(n) - Lineair in n
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
        onClick={handleGenerate}
        className="bg-white/20 text-white px-4 py-2 rounded hover:bg-white/30 transition-all shadow-md"
      >
        Generate FizzBuzz
      </button>
      <div className="mt-4">
        <strong>Result:</strong> [{result.join(", ")}]
      </div>
    </div>
  );
};

export default FizzBuzz;
