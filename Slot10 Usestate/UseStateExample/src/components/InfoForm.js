import React, { useState } from "react";

function InfoForm() {
  const [name, setName] = useState(""); // State cho tên
  const [age, setAge] = useState(""); // State cho tuổi
  return (
    <div>
            <h2>Bài 2: Nhập tên và tuổi</h2>
           {" "}
      <input
        type="text"
        placeholder="Nhập tên"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
            <p>Tên của bạn là: {name}</p>
           {" "}
      <input
        type="number"
        placeholder="Nhập tuổi"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
            <p>Tuổi của bạn là: {age}</p>   {" "}
    </div>
  );
}

export default InfoForm;
