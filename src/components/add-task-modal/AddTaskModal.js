import { useState } from "react";
import "./AddTaskModal.css";

let id = 10;

function AddTaskModal({ onAddItem, showModal, isVisible, todo }) {
  const [title, setTitle] = useState(null);
  const [status, setStatus] = useState(0);

  const handleCancel = () => {
    showModal(!isVisible);
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleStatus = (e) => {
    setStatus(e.target.value);
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

    onAddItem([...todo, newItem]);
    handleCancel();

    localStorage.setItem("todo", JSON.stringify(todo));
  };

  return (
    <div className="container">
      <div className="add-task-modal">
        <h2>Add TODO</h2>
        <form>
          <label>Title</label>
          <input type="text" onChange={handleTitle} />
          <label>Status</label>
          <select onChange={handleStatus}>
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
