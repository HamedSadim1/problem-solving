import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import { Exercise } from "./components/exercises";

/**
 * Main application component for the Problem Solving Exercises app.
 * Manages the overall layout and state for exercise selection.
 *
 * @returns {JSX.Element} The rendered app component
 */
function App() {
  // State to track the currently selected exercise
  const [selectedExercise, setSelectedExercise] = useState<Exercise>("twoSum");

  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex">
        <Sidebar
          selectedExercise={selectedExercise}
          onSelectExercise={setSelectedExercise}
        />
        <MainContent selectedExercise={selectedExercise} />
      </div>
    </div>
  );
}

export default App;
