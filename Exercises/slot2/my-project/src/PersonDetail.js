// src/PersonDetail.js
import people from "./peopleData";

function PersonDetail() {
  const person = people[0]; 
  return (
    <div>
      <h2>Thông tin người</h2>
      <p><strong>Tên:</strong> {person.name}</p>
      <p><strong>Tuổi:</strong> {person.age}</p>
      <p><strong>Nghề nghiệp:</strong> {person.occupation}</p>
    </div>
  );
}

export default PersonDetail;
  