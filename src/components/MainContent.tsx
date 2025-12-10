import React from "react";
import { Exercise, exercises } from "./exercises";

/**
 * Props interface for the MainContent component.
 */
interface MainContentProps {
  /** The currently selected exercise to display */
  selectedExercise: Exercise;
}

/**
 * Main content area component that renders the selected exercise.
 * Provides a styled container with glasmorfisme effects for displaying
 * the interactive exercise components.
 *
 * @param props - The component props
 * @returns {JSX.Element} The main content element
 */
const MainContent: React.FC<MainContentProps> = ({ selectedExercise }) => {
  return (
    <main className="flex-1 p-6">
      <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-lg border border-white/20">
        {exercises[selectedExercise].component}
      </div>
    </main>
  );
};

export default MainContent;
