// src/SortPeople.js
import people from "./peopleData";

function SortPeople() {
  const sorted = [...people].sort((a, b) => {
    if (a.occupation < b.occupation) return -1;
    if (a.occupation > b.occupation) return 1;
    return a.age - b.age;
  });

  return (
    <div>
      <h2>Danh sách người sau khi sắp xếp</h2>
      <ul>
        {sorted.map((p, i) => (
          <li key={i}>{p.name} - {p.occupation} - {p.age} tuổi</li>
        ))}
      </ul>
    </div>
  );
}

export default SortPeople;
