import React, { useState } from "react";

function ProductRadio() {
  const [products] = useState([
    { id: 1, name: "Sản phẩm A" },
    { id: 2, name: "Sản phẩm B" },
    { id: 3, name: "Sản phẩm C" },
  ]);

  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleRadioChange = (event) => {
    setSelectedProductId(parseInt(event.target.value, 10));
  };

  return (
    <div>
            <h2>Bài 4: Chọn một sản phẩm (Radio)</h2>     {" "}
      {products.map((product) => (
        <div key={product.id}>
                   {" "}
          <input
            type="radio"
            name="product"
            value={product.id}
            checked={selectedProductId === product.id}
            onChange={handleRadioChange}
          />
                    <label>{product.name}</label>       {" "}
        </div>
      ))}
           {" "}
      {selectedProductId && (
        <p>
          Bạn đã chọn: {products.find((p) => p.id === selectedProductId)?.name}
        </p>
      )}
         {" "}
    </div>
  );
}

export default ProductRadio;
