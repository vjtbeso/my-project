// src/GroupByOccupation.js
import people from "./peopleData";

function GroupByOccupation() {
  const groups = people.reduce((acc, p) => {
    if (!acc[p.occupation]) acc[p.occupation] = [];
    acc[p.occupation].push(p);
    return acc;
  }, {});

  return (
    <div>
      <h2>Nhóm người theo nghề nghiệp</h2>
      {Object.entries(groups).map(([occupation, group]) => (
        <div key={occupation}>
          <h3>{occupation}</h3>
          <ul>
            {group.map((p, i) => (
              <li key={i}>{p.name} - {p.age} tuổi</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default GroupByOccupation;
