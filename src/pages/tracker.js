import React, { useState } from "react";
import "./tracker.css"

function BoxTracker() {
  const [columnCount, setColumnCount] = useState(32);

  const addColumn = () => {
    setColumnCount(columnCount + 32);
  };

  return (
    <div>
      <div className="gridContainer">
        {[...Array(columnCount)].map((_, index) => (
          <div className="gridItem" key={index}>
            yeet
          </div>
        ))}
      </div>
      <button className="Additional-Row" onClick={addColumn}>
        Add a New Column
      </button>
    </div>
  );
}

export default BoxTracker;
