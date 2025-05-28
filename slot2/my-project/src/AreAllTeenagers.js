// src/AreAllTeenagers.js
import people from "./peopleData";

function AreAllTeenagers() {
  const allTeen = people.every(p => p.age >= 13 && p.age <= 19);

  return (
    <div>
      <h2>Kiểm tra tất cả là teenager</h2>
      <p>{allTeen ? "Tất cả đều là teenagers." : "Không phải tất cả đều là teenagers."}</p>
    </div>
  );
}

export default AreAllTeenagers;
