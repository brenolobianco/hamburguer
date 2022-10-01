import React from "react";
import { useState } from "react";
import ProductCard from "../productCard";
import "./style.css";

function Cart({ currentSale }) {
  const [change, setChange] = useState(false);

  const totalPrice = currentSale.reduce((valorAnterior, valorAtual) => {
    return Number(valorAtual.price) + valorAnterior;
  }, 0);

  // if (currentSale.length>1) {
  //   setChange(false);
  // }

  return change ? (
    <div className="cart-box">
      <div className="cart-description">
        <h2>Carrinho de compras</h2>
      </div>
      <ul className="cart-list">
        <h2>Bla bla bla</h2>
      </ul>
    </div>
  ) : (
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
          />
        ))}
      </ul>
      <div className="total-box">
        <div className="total-box-price">
          <h2>Total</h2>
          <p>R${totalPrice}</p>
        </div>
        <button>Remover Todos</button>
      </div>
    </div>
  );
}

export default Cart;
