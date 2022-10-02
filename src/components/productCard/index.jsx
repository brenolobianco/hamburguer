import React from "react";
import { useState } from "react";
import "./styles.css";
import { render } from "react-dom";

function ProductCard({ product, deleteCard,handleClick}) {
 
  return (
    <li className="card">
      <div className="card-imagebox">
        <img src={product.img} alt="Imagem Card" />
      </div>
      <div className="card-description">
        <h2>{product.name}</h2>
        <h4>{product.category}</h4>
        <p>R$ {product.price}</p>
        <button onClick={() => handleClick(product)}>Adicionar</button>
        <button onClick={() => deleteCard(product)} className="removeBtn">
          Remover
        </button>
      </div>
    </li>
  );
}
export default ProductCard;
