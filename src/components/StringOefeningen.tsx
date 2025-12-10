import React, { useState } from "react";

const StringOefeningen = () => {
  const [str, setStr] = useState<string>("abc");
  const [ending, setEnding] = useState<string>("bc");
  const [result, setResult] = useState<boolean | null>(null);

  const solution = (str: string, ending: string): boolean => {
    return str.endsWith(ending);
  };

  const handleCheck = () => {
    setResult(solution(str, ending));
  };

  return (
    <div className="p-6 bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-white/20 text-white">
      <h2 className="text-2xl font-bold mb-4">String Ends With</h2>
      <div className="mb-6">
        <p className="mb-3">
          <strong>Probleem:</strong> Controleer of een string eindigt met een
          gegeven suffix.
        </p>
        <p className="mb-3">
          <strong>Voorbeeld:</strong> String = "abc", Ending = "bc"
          <br />
          Resultaat: true (abc eindigt met bc)
        </p>
        <p className="mb-3">
          <strong>Voorbeeld:</strong> String = "abc", Ending = "d"
          <br />
          Resultaat: false (abc eindigt niet met d)
        </p>
        <p className="mb-3">
          <strong>Edge cases:</strong>
        </p>
        <ul className="list-disc list-inside mb-3 ml-4">
          <li>Lege ending: altijd true</li>
          <li>Ending langer dan string: altijd false</li>
          <li>Case-sensitive vergelijking</li>
        </ul>
        <p className="mb-3">
          <strong>Built-in oplossing:</strong> Gebruik str.endsWith(ending) in
          JavaScript
        </p>
        <p className="mb-3">
          <strong>Handmatige implementatie:</strong> Vergelijk substring van
          string met ending
        </p>
        <p className="mb-3">
          <strong>Tijdcomplexiteit:</strong> O(min(len(str), len(ending))) -
          Meestal O(len(ending))
        </p>
        <p className="mb-3">
          <strong>Toepassingen:</strong> Bestandsextensie controle, URL
          validatie, string parsing
        </p>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">String:</label>
        <input
          type="text"
          value={str}
          onChange={(e) => setStr(e.target.value)}
          className="w-full p-2 border border-white/30 rounded bg-white/20 text-white placeholder-white/70"
          placeholder="e.g., abc"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Ending:</label>
        <input
          type="text"
          value={ending}
          onChange={(e) => setEnding(e.target.value)}
          className="w-full p-2 border border-white/30 rounded bg-white/20 text-white placeholder-white/70"
          placeholder="e.g., bc"
        />
      </div>
      <button
        onClick={handleCheck}
        className="bg-white/20 text-white px-4 py-2 rounded hover:bg-white/30 transition-all shadow-md"
      >
        Check
      </button>
      <div className="mt-4">
        <strong>Result:</strong>{" "}
        {result !== null ? (result ? "True" : "False") : ""}
      </div>
    </div>
  );
};

export default StringOefeningen;
