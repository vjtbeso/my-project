import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // Khởi tạo state

  return (
    <div>
      <h3>Counter</h3>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
