import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import LaptopList from "./components/LaptopList";
import LaptopDetail from "./components/LaptopDetail";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm setUser={setUser} />} />
        <Route path="/laptops" element={<LaptopList />} />
        <Route path="/laptops/:id" element={<LaptopDetail />} />
        <Route path="*" element={<h3>404 Not Found</h3>} />
      </Routes>
    </Router>
  );
}

export default App;
