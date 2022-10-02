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
  
      <form >
      <input
        type="text"
        onChange={(event) => filter(event.target.value)}
        placeholder="Digitar Pesquisa"
      ></input>
      <button onClick={() => filter()} >Pesquisar</button>
      </form>
    
  );
}
export default SearchInput;
