import React from "react";
import Counter from "./components/Counter";
import InfoForm from "./components/InfoForm";
import ProductCheckbox from "./components/ProductCheckbox";
import ProductRadio from "./components/ProductRadio"; // 👈

function App() {
  return (
    <div className="App">
            <Counter />
            <hr />
            <InfoForm />
            <hr />
            <ProductCheckbox />
            <hr />
            <ProductRadio /> {/* 👈 */}   {" "}
    </div>
  );
}

export default App;
