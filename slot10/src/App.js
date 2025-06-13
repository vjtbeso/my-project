import React from "react";
import Counter from "./components/Counter";
import ControlledInput from "./components/ControlledInput";
import ToggleText from "./components/ToggleText"; // <-- Thêm dòng này
import TodoList from "./components/TodoList";
import ColorSwitcher from "./components/ColorSwitcher";
import SearchFilter from "./components/SearchFilter";
import DragDropList from "./components/DragDropList";

function App() {
  return (
    <div className="App">
      <h1>React useState Exercises</h1>
      <Counter />
      <ControlledInput />
      <ToggleText />
      <TodoList />
      <ColorSwitcher />
      <SearchFilter />
      <DragDropList /> {/* <-- Câu 7 */}
    </div>
  );
}

export default App;
