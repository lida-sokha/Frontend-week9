import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [score, setScore] = useState(5);

  const getScoreBarStyle = () => {
    const clampedScore = Math.min(10, Math.max(0, score));
    const scoreWidth = `${clampedScore * 10}%`;  // Fixed template literal

    let scoreColor;
    if (clampedScore <= 3) {  // Fixed variable name here
      scoreColor = "#ff4d4d";
    } else if (clampedScore <= 7) {
      scoreColor = "#f3bc47";
    } else {
      scoreColor = "#4CAF50";
    }

    return {
      width: scoreWidth,
      backgroundColor: scoreColor,
      transition: "all 0.3s ease",
    };
  };

  const handleScoreChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    setScore(value);
  };

  return (
    <div className="score-panel">
      <h1>My Score in React</h1>
      <small>Enter a score (0 to 10): </small>
      <input 
        type="number" 
        min="0" 
        max="10" 
        value={score} 
        onChange={handleScoreChange} 
      />
      <div className="score-bar">
        <div className="score-bar-value" style={getScoreBarStyle()}></div>
      </div>
    </div>
  );
}