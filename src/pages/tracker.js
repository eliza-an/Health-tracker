import React, { useState } from "react";
import "./tracker.css";
import DateTime from "../components/datePicker/dateTime";





function BoxTracker() {
  // Get the current month and number of days
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const numDaysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate(); 
  
  
  const [columnCount, setColumnCount] = useState(numDaysInMonth);
  const [myColor, setMyColor] = useState(Array(columnCount).fill("white"));

 

  const [rowCount, setRowCount] = useState(1);

  const handleAddRow = () => {
    setRowCount(rowCount + 1);
    setColumnCount(numDaysInMonth);
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
        <div>
          {/* creates a new array with length collumn count. ... spreads the aray into individual elements. .map executes a callback function over each element in the array */}
          <table className="gridContainer">
            <thead>
              <tr>
                <th className="habitName">Habit</th>
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
                  {[...Array(numDaysInMonth)].map((_, dayIndex) => {
                    const index = rowIndex * numDaysInMonth + dayIndex;
                    return(
                    <td
                      className="gridItem"
                      onClick={() => handleClick(index)}
                      style={{ backgroundColor: myColor[index] }}
                      key={dayIndex}
                    ></td>
                    );

                  })}
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


localStorage.setItem()

