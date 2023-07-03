import React, { useState } from "react";
import "./tracker.css"




function BoxTracker() {
  const [columnCount, setColumnCount] = useState(32);
  const [myColor, setMyColor] = useState(Array(columnCount).fill("white"));

  const addColumn = () => {
    setColumnCount(columnCount + 32);
     setMyColor([...myColor, ...Array(32).fill("white")]);
  };




const handleClick = (index) => {
  const updatedColors = [...myColor];
  updatedColors[index] = updatedColors[index] === "white" ? "green" : "white";
  setMyColor(updatedColors);
};

  return (
    <div>
      <div className="gridContainer">
        {/* creates a new array with length collumn count. ... spreads the aray into individual elements. .map executes a callback function over each element in the array */}
        
           {myColor.map((color, index) => (
          <div
            className="gridItem"
            onClick={() => handleClick(index)}
          style={{ backgroundColor: color }}
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
