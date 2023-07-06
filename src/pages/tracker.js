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

 
  const [habitNames,setHabitNames] = useState(() => {
    // getting stored value
  const savedHabitNames = localStorage.getItem("Habit-Names");
  // baiscally an if statement 
  const initialHabitNames = savedHabitNames ? JSON.parse(savedHabitNames) : [""] 
  return initialHabitNames;
  })




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


    const handleHabitNameChange = (index, value) => {
    const updatedHabitNames = [...habitNames];
    updatedHabitNames[index] = value;
    setHabitNames(updatedHabitNames);
  };
  const handleClick = (index) => {
    const updatedColors = [...myColor];
    updatedColors[index] = updatedColors[index] === "lightgreen" ? "green" : "lightgreen";
    setMyColor(updatedColors);
  };

  useEffect(() => {
    localStorage.setItem("rowCount", JSON.stringify(rowCount));
    localStorage.setItem("Habit-Names", JSON.stringify(habitNames));
  }, [rowCount, habitNames]);



  return (
    <div>
      <div>
        <DateTime />
        <div>
          {/* creates a new array with length collumn count. ... spreads the aray into individual elements. .map executes a callback function over each element in the array */}
          <table className="gridContainer">
            <thead className="header-of-columns">
              <tr>
                <th className="habitNameTitle">Habit</th>
                {/* it spreads out the array with length of daysinmonth (inside brackets). It generates the amount of table header cells based on that. The text inside each cell will be index+1 */}
                {[...Array(numDaysInMonth)].map((_, index) => (
                  <th key={index}>{index + 1}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {habitNames.map((habit, rowIndex) => (
                <tr key={rowIndex}>
                  <td>
                    <input
                      value={habit}
                      onChange={(e) =>
                        handleHabitNameChange(rowIndex, e.target.value)
                      }
                      type="text"
                    />
                  </td>
                  {[...Array(numDaysInMonth)].map((_, dayIndex) => {
                    const index = rowIndex * numDaysInMonth + dayIndex;
                    return (
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



