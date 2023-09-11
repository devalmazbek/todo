import "./ListItem.css";

function ListItem({ item }) {
  return (
    <div class="list-item">
      <div class="list-item-content">
        <input type="checkbox" className="checkbox" />
        <div class="list-item-description">
          <p>{item.name}</p>
          <p>
            <span>{item.time}</span> | <span>{item.date}</span>
          </p>
        </div>
      </div>
      <div class="list-item-btn">
        <span class="material-symbols-outlined">edit</span>
        <span class="material-symbols-outlined">delete</span>
      </div>
    </div>
  );
}

export default ListItem;
