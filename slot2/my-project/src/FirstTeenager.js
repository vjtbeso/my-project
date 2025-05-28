// src/FirstTeenager.js
import people from "./peopleData";

function FirstTeenager() {
  const teen = people.find(p => p.age >= 13 && p.age <= 19);

  return (
    <div>
      <h2>Người Teen đầu tiên</h2>
      {teen ? (
        <p>{teen.name}, {teen.age} tuổi, nghề {teen.occupation}</p>
      ) : (
        <p>Không có teenager trong danh sách.</p>
      )}
    </div>
  );
}

export default FirstTeenager;
