import React from "react";

/**
 * Header component displaying the app title and description.
 * Features a glasmorfisme design with transparent background and blur effects.
 *
 * @returns {JSX.Element} The header element
 */
const Header: React.FC = () => {
  return (
    <header className="bg-white/10 backdrop-blur-md text-white p-4 border-b border-white/20">
      <h1 className="text-3xl font-bold">Problem Solving Exercises</h1>
      <p className="mt-2">
        Practice common algorithmic problems with interactive examples.
      </p>
    </header>
  );
};

export default Header;
