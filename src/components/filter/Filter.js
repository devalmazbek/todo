import "./Filter.css";

function Filter() {
  return (
    <div class="filter">
      <select>
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  );
}

export default Filter;
