import { useState } from "react";
import ListItem from "../list-item/ListItem";

import "./List.css";

function List({ todo, onSelect, onChangeStatus, onRemoveItem, status }) {
  let filteredItems = todo;

  if (status === "incomplete") {
    filteredItems = filteredItems.filter((item) =>
      !item.status ? item : null
    );
  }

  if (status === "completed") {
    filteredItems = filteredItems.filter((item) => (item.status ? item : null));
  }

  return (
    <div className="list">
      {filteredItems.length ? (
        filteredItems.map((item) => {
          return (
            <ListItem
              item={item}
              key={item.id}
              onSelect={onSelect}
              onChangeStatus={onChangeStatus}
              onRemoveItem={onRemoveItem}
            />
          );
        })
      ) : (
        <>No items. Please add new item!</>
      )}
    </div>
  );
}

export default List;
