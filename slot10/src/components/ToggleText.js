import React, { useState } from "react";

function ToggleText() {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <h3>Toggle Visibility</h3>
      <button onClick={toggleVisibility}>{visible ? "Hide" : "Show"}</button>
      {visible && <p>Toggle me!</p>}
    </div>
  );
}

export default ToggleText;
