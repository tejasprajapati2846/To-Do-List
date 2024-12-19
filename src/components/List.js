function List({ taskData, deleteTask }) {
  return (
    <ul id="myUL">
      {taskData.length > 0 ? (
        taskData.map((item, index) => (
          <li key={index}>
            {item}
            <span className="close" onClick={() => deleteTask(index)}>
              ×
            </span>
          </li>
        ))
      ) : (
        <li>No items available</li>
      )}
    </ul>
  );
}

export default List;
