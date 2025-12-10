import React from "react";
import { Exercise, exercises } from "./exercises";

/**
 * Props interface for the Sidebar component.
 */
interface SidebarProps {
  /** The currently selected exercise identifier */
  selectedExercise: Exercise;
  /** Callback function to handle exercise selection */
  onSelectExercise: (exercise: Exercise) => void;
}

/**
 * Sidebar component providing navigation for exercise selection.
 * Displays a list of all available exercises with interactive buttons.
 * Uses glasmorfisme styling for a modern, transparent look.
 *
 * @param props - The component props
 * @returns {JSX.Element} The sidebar navigation element
 */
const Sidebar: React.FC<SidebarProps> = ({
  selectedExercise,
  onSelectExercise,
}) => {
  return (
    <nav className="w-64 bg-white/10 backdrop-blur-md shadow-md min-h-screen p-4 border-r border-white/20">
      <h2 className="text-xl font-semibold mb-4 text-white">Exercises</h2>
      <ul>
        {Object.entries(exercises).map(([key, { name }]) => (
          <li key={key} className="mb-2">
            <button
              onClick={() => onSelectExercise(key as Exercise)}
              className={`w-full text-left p-2 rounded transition-all ${
                selectedExercise === key
                  ? "bg-white/20 text-white shadow-lg"
                  : "text-white/80 hover:bg-white/10 hover:text-white"
              }`}
            >
              {name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
