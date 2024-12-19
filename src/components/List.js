import TaskActionModal from "./Alert";
function List({ taskData, deleteTask, editTask }) {
  return (
    <ul id="myUL">
      {taskData.length > 0 ? (
        taskData.map((item, index) => (
          <li key={index}>
            {item}
            <TaskActionModal
              index={index}
              taskData={taskData}
              deleteTask={deleteTask}
              editTask={editTask}
            />
          </li>
        ))
      ) : (
        <li>No items available</li>
      )}
    </ul>
  );
}

export default List;
