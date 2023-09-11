import Header from "./components/header/Header";
import AddTask from "./components/add-task/AddTask";
import Filter from "./components/filter/Filter";
import List from "./components/list/List";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <div class="header">
        <AddTask />
        <Filter />
      </div>
      <List />
    </div>
  );
}

export default App;
