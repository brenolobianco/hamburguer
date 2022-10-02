import React from "react";
import { useState } from "react";
import ProductCard from "../productCard";
import "./style.css";

function Cart({ currentSale, setCurrentSale, change, setChange }) {
  if (currentSale.length >= 1) {
    setChange(true);
  } else setChange(false);

  function deleteCard(productItem) {
    console.log("clicou");
    const filteredCard = currentSale.filter((card) => {
      return card.id !== productItem.id;
    });
    setCurrentSale(filteredCard);
  }

  function deleteAllCards() {
    console.log("Clicou");
    setCurrentSale([]);
    // setChange(false);
  }

  const totalPrice = currentSale.reduce((valorAnterior, valorAtual) => {
    return Number(valorAtual.price) + valorAnterior;
  }, 0);

  const totalPriceFixed = totalPrice.toFixed(2);

  return change ? (
    <>
      <div className="cart-box">
        <div className="cart-description">
          <h2>Carrinho de compras</h2>
        </div>
        <ul className="cart-list">
          {currentSale.map((product) => (
            <ProductCard
              key={product.name}
              product={product}
              currentSale={currentSale}
              deleteCard={deleteCard}
              setChange={setChange}
            />
          ))}
        </ul>
        <div className="total-box">
          <div className="total-box-price">
            <h2>Total</h2>
            <p>R${totalPriceFixed}</p>
          </div>
          <button onClick={() => deleteAllCards()}>Remover Todos</button>
        </div>
      </div>
    </>
  ) : (
    <div className="cart-box-empty">
      <div className="cart-description">
        <h2>Carrinho de compras</h2>
      </div>

      <div className="cart-empty">
        <h2>Sua sacola está vazia</h2>
        <p>Adicione itens</p>
      </div>
    </div>
  );
}

export default Cart;
