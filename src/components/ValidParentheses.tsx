import React, { useState } from "react";

const ValidParentheses = () => {
  const [input, setInput] = useState<string>("()[]{}");
  const [result, setResult] = useState<boolean | null>(null);

  const isValid = (s: string): boolean => {
    const stack: string[] = [];
    const map: { [key: string]: string } = { ")": "(", "}": "{", "]": "[" };
    for (const char of s) {
      if (char in map) {
        const top = stack.pop();
        if (top !== map[char]) return false;
      } else {
        stack.push(char);
      }
    }
    return stack.length === 0;
  };

  const handleCheck = () => {
    setResult(isValid(input));
  };

  return (
    <div className="p-6 bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-white/20 text-white">
      <h2 className="text-2xl font-bold mb-4">Valid Parentheses</h2>
      <div className="mb-6">
        <p className="mb-3">
          <strong>Probleem:</strong> Controleer of een string geldige haakjes
          heeft (gebalanceerd en correct genest).
        </p>
        <p className="mb-3">
          <strong>Voorbeeld:</strong> "()" → true
          <br />
          "()[]{}" → true
          <br />
          "(]" → false
        </p>
        <p className="mb-3">
          <strong>Voorbeeld:</strong> "([)]" → false (genest maar niet correct)
          <br />
          &#123;[()]&#125; → true
        </p>
        <p className="mb-3">
          <strong>Benadering:</strong> Stack-gebaseerd algoritme
        </p>
        <ul className="list-disc list-inside mb-3 ml-4">
          <li>Push opening haakjes op stack</li>
          <li>Voor closing haakjes: pop en vergelijk met verwacht type</li>
          <li>Stack moet leeg zijn aan het eind</li>
        </ul>
        <p className="mb-3">
          <strong>Tijdcomplexiteit:</strong> O(n) - Enkele pass door de string
        </p>
        <p className="mb-3">
          <strong>Ruimtecomplexiteit:</strong> O(n) - Stack kan half de string
          bevatten
        </p>
        <p className="mb-3">
          <strong>Toepassingen:</strong> Parser validatie, code editors,
          wiskundige expressies
        </p>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">String:</label>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-2 border border-white/30 rounded bg-white/20 text-white placeholder-white/70"
          placeholder="e.g., ()[]{}"
        />
      </div>
      <button
        onClick={handleCheck}
        className="bg-white/20 text-white px-4 py-2 rounded hover:bg-white/30 transition-all shadow-md"
      >
        Check Validity
      </button>
      <div className="mt-4">
        <strong>Result:</strong>{" "}
        {result !== null ? (result ? "Valid" : "Invalid") : ""}
      </div>
    </div>
  );
};

export default ValidParentheses;
