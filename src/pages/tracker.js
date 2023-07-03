import React, { useState } from "react";
import "./tracker.css";
import DateTime from "../components/dateTime";

function BoxTracker() {
  const [rowCount, setRowCount] = useState(1);
  const [columnCount, setColumnCount] = useState(31);
  const [myColor, setMyColor] = useState([Array(columnCount).fill("white")]);
  const [myTitles, setMyTitles] = useState([Array(rowCount).fill("")]);

  const prependInputBox = (rowIndex) => {
    return (
      <input
        type="text"
        name={`HabitName-${rowIndex}`}
        value={myTitles[rowIndex]}
        onChange={(e) => handleTitleChange(e, rowIndex)}
      />
    );
  };

  const handleTitleChange = (e, rowIndex) => {
    const updatedTitles = [...myTitles];
    updatedTitles[rowIndex] = e.target.value;
    setMyTitles(updatedTitles);
  };

  const addRow = () => {
    setRowCount(rowCount + 1);
    setMyColor([...myColor, Array(columnCount).fill("white")]);
    setMyTitles([...myTitles, ""]);
  };

  const handleClick = (rowIndex, columnIndex) => {
    const updatedColors = [...myColor];
    updatedColors[rowIndex][columnIndex] = updatedColors[rowIndex][columnIndex] === "white" ? "green" : "white";
    setMyColor(updatedColors);
  };

  return (
    <div>
      <DateTime />
      <div className="gridContainer">
        {myColor.map((row, rowIndex) => (
          <div key={`row-${rowIndex}`} className="gridRow">
            {prependInputBox(rowIndex)}
            {row.map((color, columnIndex) => (
              <div
                key={`cell-${rowIndex}-${columnIndex}`}
                className="gridItem"
                onClick={() => handleClick(rowIndex, columnIndex)}
                style={{ backgroundColor: color }}
              >
                yeet
              </div>
            ))}
          </div>
        ))}
      </div>
      <button className="Additional-Row" onClick={addRow}>
        Add a New Row
      </button>
    </div>
  );
}

export default BoxTracker;
