import "./App.css";
import Header from "./components/Header";
import List from "./components/List";
import { useState } from "react";

function App() {

  const [taskData,setTaskData] = useState([]);

  function addTask(task) {
    setTaskData([...taskData,task])
  }

  function deleteTask(indexToRemove) {
    console.log('Here is the index: ' + indexToRemove);
    setTaskData((prevTasks) => prevTasks.filter((_, i) => i !== indexToRemove)); // Safely update state

  }

  function editTask(indexToUpdate,updatedValue) {
     const updatedTaskData = [...taskData];
     updatedTaskData[indexToUpdate] = updatedValue;
     setTaskData(updatedTaskData);
   }

  return (
    <div>
      <Header addTask={addTask}></Header>
      <List taskData={taskData} deleteTask={deleteTask} editTask={editTask}></List>
    </div>
  );
}

export default App;
