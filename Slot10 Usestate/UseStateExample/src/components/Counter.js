import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
            <h2>Bài 1: Đếm số lần bấm</h2>      <p>Bạn đã bấm {count} lần</p>   
        <button onClick={handleClick}>Bấm tôi</button>   {" "}
    </div>
  );
}

export default Counter;
