import Swal from "sweetalert2";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";

function TaskActionModal({ index, taskData, deleteTask, editTask }) {
  const handleAction = () => {
    Swal.fire({
      title: "Choose an action",
      showCancelButton: true,
      cancelButtonText: "Cancel",
      confirmButtonText: "Edit",
      showDenyButton: true,
      denyButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        // Edit Task
        Swal.fire({
          title: "Edit Task",
          input: "text",
          inputValue: taskData[index],
          showCancelButton: true,
          confirmButtonText: "Save",
        }).then((editResult) => {
          if (editResult.value && editResult.value !== taskData[index]) {
            editTask(index, editResult.value);
          }
        });
      } else if (result.isDenied) {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "Cancel",
        }).then((deleteResult) => {
          if (deleteResult.isConfirmed) {
            deleteTask(index);
            Swal.fire("Deleted!", "Your task has been deleted.", "success");
          }
        });
      }
    });
  };

  return (
    <>
      <span onClick={handleAction} className="edit">
        <FaEdit />
      </span>
      <span onClick={handleAction} className="close">
        <RiDeleteBack2Fill />
      </span>
    </>
  );
}

export default TaskActionModal;
