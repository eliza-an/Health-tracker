import React, { useState } from "react";
import "./tracker.css";
import DateTime from "../components/datePicker/dateTime";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";







function BoxTracker() {
  // Get the current month and number of days
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const numDaysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate(); 
  
  
  const [columnCount, setColumnCount] = useState(numDaysInMonth + 1);
  const [myColor, setMyColor] = useState(Array(columnCount).fill("white"));


 
  const [habitNames,setHabitNames] = useState(() => {
    // getting stored value
  const savedHabitNames = localStorage.getItem("Habit-Names");
  // baiscally an if statement 
  const initialHabitNames = savedHabitNames ? JSON.parse(savedHabitNames) : [""] 
  return initialHabitNames;
  })



  const [selectedIndexes, setSelectedIndexes] = useState([]);



  const handleAddRow = () => {

    setColumnCount(numDaysInMonth + 1);
    setMyColor([...myColor, ...Array(numDaysInMonth).fill("white")]);
    const updatedHabitNames = [...habitNames];
    updatedHabitNames.push("");
    setHabitNames(updatedHabitNames);
  };


    const handleHabitNameChange = (index, value) => {
    const updatedHabitNames = [...habitNames];
    updatedHabitNames[index] = value;
    setHabitNames(updatedHabitNames);

  };  
  const removeRow = (index, e) => {
    let updatedHabitNames = [...habitNames];
    updatedHabitNames= updatedHabitNames.filter((v, i) => 
    i !==index 
    )
    setHabitNames(updatedHabitNames)
  }; 


  const handleClick = (index) => {
    const updatedColors = [...myColor];
    updatedColors[index] =  updatedColors[index] === "lightgreen" ? "green" : updatedColors[index] === "green" ? "white"  : "lightgreen";;
    setMyColor(updatedColors);

  const updatedIndexes = [...selectedIndexes];
  updatedIndexes.push(index);
  setSelectedIndexes(updatedIndexes);

    localStorage.setItem("completedIndexes", JSON.stringify(updatedIndexes));
    localStorage.setItem("completedColors", JSON.stringify(updatedColors));
  
  };

  useEffect(() => { 
    

    localStorage.setItem("Habit-Names", JSON.stringify(habitNames));
    const storedIndexes = JSON.parse(localStorage.getItem("completedIndexes"));
      if (storedIndexes && Array.isArray(storedIndexes)) {
        setSelectedIndexes(storedIndexes);
      }
      
  const storedColors = JSON.parse(localStorage.getItem("completedColors"));
  if (storedColors && Array.isArray(storedColors)) {
    setMyColor(storedColors);
   
  }


  }, [habitNames] )



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
                  <FontAwesomeIcon
                    icon={solid("trash")}
                    style={{ color: "#000000" }}
                    className="trashCan"
                    onClick={e =>removeRow(rowIndex, e)}
                  />
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



