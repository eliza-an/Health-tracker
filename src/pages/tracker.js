import React, { useState } from "react";
import "./tracker.css";
import DateTime from "../components/datePicker/dateTime";





function BoxTracker() {
  const [columnCount, setColumnCount] = useState(daysInMonth());
  const [myColor, setMyColor] = useState(Array(columnCount).fill("white"));

  // Get the current month and number of days
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const numDaysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const [rowCount, setRowCount] = useState(1);

  const handleAddRow = () => {
    setRowCount(rowCount + 1);
  };


    function daysInMonth() {
      const now = new Date();
      return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
    }

  const addColumn = () => {
    setColumnCount(columnCount + daysInMonth());
    setMyColor([...myColor, ...Array(31).fill("white")]);
  };

  const handleClick = (index) => {
    const updatedColors = [...myColor];
    updatedColors[index] = updatedColors[index] === "white" ? "green" : "white";
    setMyColor(updatedColors);
  };




  return (
    <div>
    <div>
      <DateTime />
      <div className="gridContainer">
        {/* creates a new array with length collumn count. ... spreads the aray into individual elements. .map executes a callback function over each element in the array */}
      <table>
        <thead>
          <tr>
            <th>Input</th>
            {[...Array(numDaysInMonth)].map((_, index) => (
              <th key={index}>{index + 1}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[...Array(rowCount)].map((_, rowIndex) => (
            <tr key={rowIndex}>
              <td>
                <input type="text" />
              </td>
              {[...Array(numDaysInMonth)].map((_, dayIndex) => (
                <td key={dayIndex}>Cell</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>

      </div>
      <button className="Additional-Row" onClick={handleAddRow}>
        Add a New Column
      </button>
    </div>
  );
}

export default BoxTracker;

