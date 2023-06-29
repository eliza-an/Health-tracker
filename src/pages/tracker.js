import React, { useState } from "react";
import "./tracker.css"




function BoxTracker() {
  const [columnCount, setColumnCount] = useState(32);

  const addColumn = () => {
    setColumnCount(columnCount + 32);
  };


const [myColor, setmyColor] = useState("white");
    


  return (
    <div>
      <div className="gridContainer">
        {/* creates a new array with length collumn count. ... spreads the aray into individual elements. .map executes a callback function over each element in the array */}
        {[...Array(columnCount)].map((_, index) => (
          <div
            className="gridItem"
            onClick={() => setmyColor("blue")}
            style={{ backgroundColor: myColor }}
            key={index}
          >
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
