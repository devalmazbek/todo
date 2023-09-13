import "./ListItem.css";

function ListItem({ item, onSelect, onChangeStatus, onRemoveItem }) {
  const done = item.status ? "done" : "";
  return (
    <div className="list-item">
      <div className="list-item-content">
        <input
          type="checkbox"
          className="checkbox"
          value={item.status}
          checked={item.status}
          onChange={() => onChangeStatus(item.id)}
        />
        <div className="list-item-description">
          <p className={done}>{item.title}</p>
          <p>
            <span>{item.time.slice(0, 5)}</span> | <span>{item.date}</span>
          </p>
        </div>
      </div>
      <div className="list-item-btn">
        <span className="material-symbols-outlined">edit</span>
        <span
          className="material-symbols-outlined"
          onClick={() => onRemoveItem(item.id)}
        >
          delete
        </span>
      </div>
    </div>
  );
}

export default ListItem;
