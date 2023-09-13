import "./AddTask.css";

function AddTask({ onAdd }) {
  return (
    <div className="add-task">
      <button onClick={() => onAdd(true)}>add task</button>
    </div>
  );
}

export default AddTask;
