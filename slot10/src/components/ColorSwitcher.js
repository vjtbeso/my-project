import React, { useState } from "react";

function ColorSwitcher() {
  const [color, setColor] = useState("white"); // Màu mặc định là trắng

  return (
    <div>
      <h3>Color Switcher</h3>
      <select value={color} onChange={(e) => setColor(e.target.value)}>
        <option value="white">White</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
        <option value="pink">Pink</option>
      </select>

      <div
        style={{
          backgroundColor: color,
          padding: "30px",
          marginTop: "10px",
          border: "1px solid #ccc",
        }}
      >
        Selected Color: {color}
      </div>
    </div>
  );
}

export default ColorSwitcher;
