import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/header";
import ProductList from "./components/productList";
import Cart from "./components/cart";
import { render } from "react-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  const [currentSale, setCurrentSale] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilter] = useState([]);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => {
        setFilter(response);
        setProducts(response);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Header products={products}
      setProducts={setProducts}
       filteredProducts={filteredProducts}
      />

      <div className="container">
        <main className="main-content">
          <ProductList
            products={products}
            setProducts={setProducts}
            setCurrentSale={setCurrentSale}
            currentSale={currentSale}
          />
          <Cart setCurrentSale={setCurrentSale} currentSale={currentSale} />
          <ToastContainer />
        </main>
      </div>
    </div>
  );
}

export default App;
