import React from "react";
import { useState } from "react";
import "./styles.css";
import { render } from "react-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function ProductCard({ product, setCurrentSale, currentSale }) {
  function handleClick(productItem) {
    const itemRepetido = currentSale.find((item) => {
      return item.id === productItem.id;
    });

    if (itemRepetido) {
      toast.success("Item já adicionado");
    } else {
      setCurrentSale((previous) => [...previous, productItem]);
      console.log(currentSale);
    }
  }

  function deleteCard(productItem) {
    console.log("clicou", productItem);
    const filteredCard = currentSale.filter((card) => card !== productItem);

    setCurrentSale(filteredCard);
  }

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