import React, { useState } from "react";

function ProductCheckbox() {
  const [products] = useState([
    { id: 1, name: "Sản phẩm A" },
    { id: 2, name: "Sản phẩm B" },
    { id: 3, name: "Sản phẩm C" },
  ]);

  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleCheckboxChange = (event) => {
    const productId = parseInt(event.target.value, 10);

    if (event.target.checked) {
      setSelectedProducts([...selectedProducts, productId]);
    } else {
      setSelectedProducts(selectedProducts.filter((id) => id !== productId));
    }
  };

  return (
    <div>
            <h2>Bài 3: Chọn nhiều sản phẩm</h2>     {" "}
      {products.map((product) => (
        <div key={product.id}>
                   {" "}
          <input
            type="checkbox"
            value={product.id}
            checked={selectedProducts.includes(product.id)}
            onChange={handleCheckboxChange}
          />
                    <label>{product.name}</label>       {" "}
        </div>
      ))}
           {" "}
      {selectedProducts.length > 0 && (
        <p>
          Bạn đã chọn:{" "}
          {selectedProducts
            .map((id) => products.find((p) => p.id === id).name)
            .join(", ")}
        </p>
      )}
         {" "}
    </div>
  );
}

export default ProductCheckbox;
