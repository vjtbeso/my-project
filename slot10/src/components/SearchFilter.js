import React, { useState } from "react";

function SearchFilter() {
  const [searchTerm, setSearchTerm] = useState("");

  const items = [
    "Apple",
    "Banana",
    "Orange",
    "Grape",
    "Strawberry",
    "Pineapple",
  ];

  // Lọc danh sách theo từ khóa
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h3>Search Filter</h3>
      <input
        type="text"
        placeholder="Search fruits..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ul>
        {filteredItems.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchFilter;
