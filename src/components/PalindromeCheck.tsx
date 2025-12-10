import React, { useState } from "react";

const PalindromeCheck = () => {
  const [input, setInput] = useState<string>("racecar");
  const [result, setResult] = useState<boolean | null>(null);

  const isPalindrome = (str: string): boolean => {
    const cleaned = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    return cleaned === cleaned.split("").reverse().join("");
  };

  const handleCheck = () => {
    setResult(isPalindrome(input));
  };

  return (
    <div className="p-6 bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-white/20 text-white">
      <h2 className="text-2xl font-bold mb-4">Palindrome Check</h2>
      <div className="mb-6">
        <p className="mb-3">
          <strong>Probleem:</strong> Controleer of een string een palindroom is
          (leest hetzelfde van voor naar achter als van achter naar voor).
        </p>
        <p className="mb-3">
          <strong>Voorbeeld:</strong> "racecar" → true
          <br />
          "A man, a plan, a canal: Panama" → true (na opschoning)
        </p>
        <p className="mb-3">
          <strong>Voorbeeld:</strong> "hello" → false
        </p>
        <p className="mb-3">
          <strong>Preprocessing:</strong>
        </p>
        <ul className="list-disc list-inside mb-3 ml-4">
          <li>Verwijder niet-alfanumerieke karakters</li>
          <li>Converteer naar lowercase</li>
          <li>Negeer spaties en interpunctie</li>
        </ul>
        <p className="mb-3">
          <strong>Benadering:</strong> Vergelijk string met zijn omgekeerde
          versie
        </p>
        <p className="mb-3">
          <strong>Tijdcomplexiteit:</strong> O(n) - Lineair in lengte van string
        </p>
        <p className="mb-3">
          <strong>Alternatieve aanpakken:</strong>
        </p>
        <ul className="list-disc list-inside mb-3 ml-4">
          <li>Two-pointer techniek: vergelijk begin en eind tegelijk</li>
          <li>Recursie: vergelijk eerste en laatste karakter</li>
        </ul>
        <p className="mb-3">
          <strong>Toepassingen:</strong> DNA sequenties, woordspellen, string
          validatie
        </p>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">String:</label>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-2 border border-white/30 rounded bg-white/20 text-white placeholder-white/70"
          placeholder="e.g., racecar"
        />
      </div>
      <button
        onClick={handleCheck}
        className="bg-white/20 text-white px-4 py-2 rounded hover:bg-white/30 transition-all shadow-md"
      >
        Check Palindrome
      </button>
      <div className="mt-4">
        <strong>Result:</strong>{" "}
        {result !== null
          ? result
            ? "Yes, it's a palindrome"
            : "No, it's not a palindrome"
          : ""}
      </div>
    </div>
  );
};

export default PalindromeCheck;
