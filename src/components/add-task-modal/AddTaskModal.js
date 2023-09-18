import { useState } from "react";
import "./AddTaskModal.css";

let id = 10;

function AddTaskModal({
  onAddItem,
  showModal,
  isVisible,
  todo,
  selected = {},
}) {
  const [title, setTitle] = useState(selected?.title ? selected.title : null);
  const [status, setStatus] = useState(selected?.status ? selected.status : 0);

  const handleCancel = () => {
    showModal(!isVisible);
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleStatus = (e) => {
    setStatus(+e.target.value);
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    const newItem = {
      id: id++,
      title,
      status,
      time: new Date().toLocaleTimeString(),
      date: new Date().toLocaleDateString(),
    };

    if (selected) {
      const newTodos = todo.map((item) => {
        if (item.id === selected.id) {
          return { ...item, title: title, status: status };
        }
      });
      onAddItem(newTodos);
    } else {
      onAddItem([...todo, newItem]);
    }

    handleCancel();
  };

  console.log(selected);

  return (
    <div className="container">
      <div className="add-task-modal">
        <h2>Add TODO</h2>
        <form>
          <label>Title</label>
          <input type="text" onChange={handleTitle} value={title} />
          <label>Status</label>
          <select onChange={handleStatus} value={status}>
            <option value={0}>Incomplete</option>
            <option value={1}>Completed</option>
          </select>
          <div className="add-task-modal-btn">
            <button onClick={handleAddItem}>add task</button>
            <button onClick={handleCancel}>cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTaskModal;
