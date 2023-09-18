import { useEffect, useState } from "react";

import Header from "./components/header/Header";
import AddTask from "./components/add-task/AddTask";
import Filter from "./components/filter/Filter";
import List from "./components/list/List";
import AddTaskModal from "./components/add-task-modal/AddTaskModal";

import "./App.css";

function App() {
  const [todo, setTodo] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const [status, setStatus] = useState("all");

  const handleChangeStatus = (id) => {
    const newTodo = todo.map((item) => {
      if (item.id === id) {
        return { ...item, status: !item.status };
      }
      return item;
    });

    setTodo(newTodo);
  };

  const handleRemoveItem = (id) => {
    setTodo((todo) => {
      return todo.filter((item) => item.id !== id);
    });
  };

  return (
    <div className="app">
      <Header />
      <div className="header">
        <AddTask onAdd={setIsVisible} />
        <Filter onSortItems={setStatus} status={status} />
      </div>
      <List
        todo={todo}
        setTodo={setTodo}
        onSelect={setSelected}
        onChangeStatus={handleChangeStatus}
        onRemoveItem={handleRemoveItem}
        status={status}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      />
      {isVisible && (
        <AddTaskModal
          onAddItem={setTodo}
          showModal={setIsVisible}
          isVisible={isVisible}
          todo={todo}
          selected={selected}
        />
      )}
    </div>
  );
}

export default App;
