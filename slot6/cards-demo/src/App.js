import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container mt-4">
      <h4>
        <strong>Cards Columns</strong>
      </h4>
      <div className="row mt-3">
        <div className="col-md-4">
          <div className="card bg-blue text-black text-center">
            <img src="/Pic1.jpg" className="card-img-top" alt="Car" />
            <div className="card-body">Some text inside the first card</div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card bg-yellow text-black text-center">
            <img src="/Pic1.jpg" className="card-img-top" alt="Car" />
            <div className="card-body">Some text inside the first card</div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card bg-red text-black text-center">
            <img src="/Pic1.jpg" className="card-img-top" alt="Car" />
            <div className="card-body">Some text inside the first card</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
