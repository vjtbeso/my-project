import React, { useState } from "react";

function TodoList() {
  const [items, setItems] = useState([]); // Danh sách công việc
  const [newItem, setNewItem] = useState(""); // Công việc đang nhập

  const addItem = () => {
    if (newItem.trim() === "") return;
    setItems([...items, newItem]); // Thêm vào danh sách
    setNewItem(""); // Xoá nội dung input sau khi thêm
  };

  const deleteItem = (index) => {
    const updated = [...items];
    updated.splice(index, 1); // Xoá item tại index
    setItems(updated);
  };

  return (
    <div>
      <h3>Todo List</h3>
      <input
        type="text"
        placeholder="Enter a task..."
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={addItem}>Add</button>

      <ul>
        {items.map((item, idx) => (
          <li key={idx}>
            {item}
            <button
              onClick={() => deleteItem(idx)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
