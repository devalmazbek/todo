import "./Filter.css";

function Filter({ status, onSortItems }) {
  const handleChangeSortStatus = (e) => {
    onSortItems(e.target.value);
  };
  return (
    <div className="filter">
      <select value={status} onChange={handleChangeSortStatus}>
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  );
}

export default Filter;
