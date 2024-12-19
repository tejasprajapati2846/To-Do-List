import { useState } from "react";

function Header({ addTask }) {
  const [inputValue, setInputValue] = useState("");

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleAddTask(e) {
    e.stopPropagation();
    if (inputValue.trim()) {
      addTask(inputValue);
      setInputValue("");
    }
  }
  return (
    <div id="myDIV" className="header">
      <h2 style={{ margin: 5 }}>To Do List</h2>
      <input
        type="text"
        id="myInput"
        value={inputValue}
        onChange={handleChange}
        placeholder="Title..."
      />
      <span onClick={handleAddTask} className="addBtn">
        Add
      </span>
    </div>
  );
}

export default Header;
