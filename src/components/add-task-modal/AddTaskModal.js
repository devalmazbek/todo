import AddTask from "../add-task/AddTask";

function AddTaskModal() {
  return (
    <div class="add-task-modal">
      <h2>Add TODO</h2>
      <label>Title</label>
      <input type="text" />
      <label>Status</label>
      <select>
        <option value="incomplete">Incomplete</option>
        <option value="completed">Completed</option>
      </select>
      <button>add task</button>
      <button>cancel</button>
    </div>
  );
}

export default AddTaskModal;
