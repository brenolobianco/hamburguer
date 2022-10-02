
import "./style.css";
import ProductCard from "../productCard";

function ProductList({ setCurrentSale, currentSale,products,handleClick,counter }) {
 
  return (
    <div className="product-list">
      <ul>
        {products.map((product) => (
          <ProductCard
            key={product.name}
            product={product}
            setCurrentSale={setCurrentSale}
            currentSale={currentSale}
            handleClick={handleClick}
            counter={counter}

          />
        ))}
      </ul>
    </div>
  );
}
export default ProductList;
