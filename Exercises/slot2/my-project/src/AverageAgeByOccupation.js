// src/AverageAgeByOccupation.js
import people from "./peopleData";

function AverageAgeByOccupation() {
  const groups = people.reduce((acc, p) => {
    if (!acc[p.occupation]) acc[p.occupation] = [];
    acc[p.occupation].push(p.age);
    return acc;
  }, {});

  const averages = Object.entries(groups).map(([occupation, ages]) => {
    const avg = ages.reduce((a, b) => a + b, 0) / ages.length;
    return { occupation, avg: avg.toFixed(2) };
  });

  return (
    <div>
      <h2>Tuổi trung bình theo nghề nghiệp</h2>
      <ul>
        {averages.map(({ occupation, avg }) => (
          <li key={occupation}>{occupation}: {avg} tuổi</li>
        ))}
      </ul>
    </div>
  );
}

export default AverageAgeByOccupation;
