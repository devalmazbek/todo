import ListItem from "../list-item/ListItem";

import { data } from "../../data";
import "./List.css";

function List() {
  return (
    <div class="list">
      {data.map((item) => {
        return <ListItem item={item} />;
      })}
    </div>
  );
}

export default List;
