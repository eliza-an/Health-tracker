import React, { useState } from "react";
import "./tracker.css";
import DateTime from "../components/datePicker/dateTime";
import { useEffect } from "react";





function BoxTracker() {
  // Get the current month and number of days
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const numDaysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate(); 
  
  
  const [columnCount, setColumnCount] = useState(numDaysInMonth);
  const [myColor, setMyColor] = useState(Array(columnCount).fill("white"));

 

  const [rowCount, setRowCount] = useState(() => {
    // getting stored value
    const savedRows = localStorage.getItem("rowCount");
    const initialValue = JSON.parse(savedRows);
    return initialValue || 1;
  });
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

  useEffect(() => {
  // storing number of rows
  localStorage.setItem("rowCount", JSON.stringify(rowCount));
}, [rowCount]);
  useEffect(() => {
    // storing number of rows
    localStorage.setItem("rowCount", JSON.stringify(rowCount));
  }, [rowCount]);



  return (
    <div>
      <div>
        <DateTime />
        <div>
          {/* creates a new array with length collumn count. ... spreads the aray into individual elements. .map executes a callback function over each element in the array */}
          <table className="gridContainer">
            <thead className="header-of-columns">
              <tr>
                <th className="habitName">Habit</th>
                {/* it spreads out the array with length of daysinmonth (inside brackets). It generates the amount of table header cells based on that. The text inside each cell will be index+1 */}
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



