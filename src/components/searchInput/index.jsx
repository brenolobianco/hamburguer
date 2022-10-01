import React, { useState } from "react";
import "./styles.css";

function SearchInput({ setProducts, filteredProducts }) {
  function filter(value) {
    const productFiltered = filteredProducts.filter((product) =>
      product.name.toUpperCase().includes(value.toUpperCase())
    );
    setProducts(productFiltered);
  }

  return (
    <div className="input-box">
      <input
        type="text"
        onChange={(event) => filter(event.target.value)}
        placeholder="Digitar Pesquisa"
      ></input>
      <button type="submit">Pesquisar</button>
    </div>
  );
}
export default SearchInput;
