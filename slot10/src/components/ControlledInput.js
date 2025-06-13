import React, { useState } from "react";

function ControlledInput() {
  const [text, setText] = useState(""); // State để lưu văn bản nhập

  return (
    <div>
      <h3>Controlled Input</h3>
      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>You typed: {text}</p>
    </div>
  );
}

export default ControlledInput;
