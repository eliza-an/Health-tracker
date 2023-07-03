import React, { useState} from "react";
import "./tracker.css"
import DateTime from "../components/dateTime";




function BoxTracker() {
  const [columnCount, setColumnCount] = useState(31);
  const [myColor, setMyColor] = useState(Array(columnCount).fill("white"));
  const [title, setTitle] = useState("Add a title");

  const addColumn = () => {
    setColumnCount(columnCount + 31);
     setMyColor([...myColor, ...Array(31).fill("white")]);
     

  };




const handleClick = (index) => {
  const updatedColors = [...myColor];
  updatedColors[index] = updatedColors[index] === "white" ? "green" : "white";
  setMyColor(updatedColors);
};

  return (
    <div>
      <DateTime />
      <div className="gridContainer">
        {/* creates a new array with length collumn count. ... spreads the aray into individual elements. .map executes a callback function over each element in the array */}
        <div className="rowTitle" onClick={() => setTitle(<input type="text" name="HabitName" />)}> {title}</div>
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
