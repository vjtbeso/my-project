import React, { useState } from "react";

function DragDropList() {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3", "Item 4"]);
  const [draggingItemIndex, setDraggingItemIndex] = useState(null);

  const handleDragStart = (index) => {
    setDraggingItemIndex(index);
  };

  const handleDragEnter = (index) => {
    if (draggingItemIndex === null || draggingItemIndex === index) return;

    const updatedItems = [...items];
    const draggedItem = updatedItems[draggingItemIndex];

    // Xoá item khỏi vị trí cũ
    updatedItems.splice(draggingItemIndex, 1);
    // Thêm item vào vị trí mới
    updatedItems.splice(index, 0, draggedItem);

    setDraggingItemIndex(index);
    setItems(updatedItems);
  };

  const handleDragEnd = () => {
    setDraggingItemIndex(null);
  };

  return (
    <div>
      <h3>Drag and Drop List</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {items.map((item, index) => (
          <li
            key={index}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragEnter={() => handleDragEnter(index)}
            onDragEnd={handleDragEnd}
            style={{
              padding: "10px",
              marginBottom: "8px",
              backgroundColor: "#f0f0f0",
              border: "1px solid #ccc",
              cursor: "move",
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DragDropList;
