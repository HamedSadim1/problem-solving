import React, { useState } from "react";

const LongestCommonPrefix = () => {
  const [arrayInput, setArrayInput] = useState<string>("flower,flow,flight");
  const [result, setResult] = useState<string>("");

  const longestCommonPrefix = (strs: string[]): string => {
    if (strs.length === 0) return "";
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
      while (strs[i].indexOf(prefix) !== 0) {
        prefix = prefix.substring(0, prefix.length - 1);
        if (prefix === "") return "";
      }
    }
    return prefix;
  };

  const handleFind = () => {
    const strs = arrayInput.split(",").map((s) => s.trim());
    setResult(longestCommonPrefix(strs));
  };

  return (
    <div className="p-6 bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-white/20 text-white">
      <h2 className="text-2xl font-bold mb-4">Longest Common Prefix</h2>
      <div className="mb-6">
        <p className="mb-3">
          <strong>Probleem:</strong> Vind de langste gemeenschappelijke prefix
          string in een array van strings.
        </p>
        <p className="mb-3">
          <strong>Voorbeeld:</strong> ["flower", "flow", "flight"]
          <br />
          Resultaat: "fl" (gedeelde prefix)
        </p>
        <p className="mb-3">
          <strong>Voorbeeld:</strong> ["dog", "racecar", "car"]
          <br />
          Resultaat: "" (geen gemeenschappelijke prefix)
        </p>
        <p className="mb-3">
          <strong>Benadering:</strong> Horizontale scanning
        </p>
        <ul className="list-disc list-inside mb-3 ml-4">
          <li>Start met eerste string als prefix</li>
          <li>Vergelijk met elke volgende string</li>
          <li>Verkort prefix tot het overeenkomt</li>
          <li>Stop als prefix leeg is</li>
        </ul>
        <p className="mb-3">
          <strong>Alternatieve aanpakken:</strong>
        </p>
        <ul className="list-disc list-inside mb-3 ml-4">
          <li>Verticale scanning: vergelijk karakter voor karakter</li>
          <li>Trie/geprefix tree voor efficiëntie</li>
          <li>Binary search op prefix lengte</li>
        </ul>
        <p className="mb-3">
          <strong>Tijdcomplexiteit:</strong> O(m*n) waar m=min lengte, n=aantal
          strings
        </p>
        <p className="mb-3">
          <strong>Toepassingen:</strong> Auto-complete, string matching,
          lexicografische ordening
        </p>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">
          Strings (comma-separated):
        </label>
        <input
          type="text"
          value={arrayInput}
          onChange={(e) => setArrayInput(e.target.value)}
          className="w-full p-2 border border-white/30 rounded bg-white/20 text-white placeholder-white/70"
          placeholder="e.g., flower,flow,flight"
        />
      </div>
      <button
        onClick={handleFind}
        className="bg-white/20 text-white px-4 py-2 rounded hover:bg-white/30 transition-all shadow-md"
      >
        Find Prefix
      </button>
      <div className="mt-4">
        <strong>Result:</strong> "{result}"
      </div>
    </div>
  );
};

export default LongestCommonPrefix;
