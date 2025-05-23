// src/OldestYoungest.js
import people from "./peopleData";

function OldestYoungest() {
  const oldest = people.reduce((a, b) => (a.age > b.age ? a : b));
  const youngest = people.reduce((a, b) => (a.age < b.age ? a : b));

  return (
    <div>
      <h2>Người lớn tuổi nhất và trẻ tuổi nhất</h2>
      <p>Người lớn tuổi nhất: {oldest.name}, {oldest.age} tuổi</p>
      <p>Người trẻ tuổi nhất: {youngest.name}, {youngest.age} tuổi</p>
    </div>
  );
}

export default OldestYoungest;
