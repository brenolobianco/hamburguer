import { useEffect, useState } from "react";
import "./style.css";
import ProductCard from "../productCard";

function ProductList({ setCurrentSale, currentSale,products }) {
 
  return (
    <div className="product-list">
      <ul>
        {products.map((product) => (
          <ProductCard
            key={product.name}
            product={product}
            setCurrentSale={setCurrentSale}
            currentSale={currentSale}
          />
        ))}
      </ul>
    </div>
  );
}
export default ProductList;
