// src/PeopleList.js
import people from "./peopleData";

function PeopleList() {
  return (
    <div>
      <h2>Danh sách người</h2>
      <ul>
        {people.map((p, i) => (
          <li key={i}>
            <strong>Tên:</strong> {p.name}, <strong>Tuổi:</strong> {p.age}, <strong>Nghề:</strong> {p.occupation}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PeopleList;
