import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/header";
import ProductList from "./components/productList";
import Cart from "./components/cart";

function App() {
  const [currentSale, setCurrentSale] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilter] = useState([]);
  const [change, setChange] = useState(false);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => {
        setFilter(response);
        setProducts(response);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleClick(productItem) {
    const itemRepetido = currentSale.find((item) => {
      return item.id === productItem.id;
    });
  
    if (itemRepetido) {
      alert("Item ja Adicionado");
    } else {
      setCurrentSale((previous) => [...previous, productItem]);
      console.log(currentSale);
    }
  }

  return (
    <div className="App">
      <Header
        products={products}
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
            handleClick={handleClick}
          />
          <Cart
            setCurrentSale={setCurrentSale}
            currentSale={currentSale}
            setChange={setChange}
            change={change}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
