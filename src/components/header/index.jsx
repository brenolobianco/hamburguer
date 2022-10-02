import "./style.css";
import Logo from "../../assets/logoheader.svg";
import SearchInput from "../searchInput";

function Header({ products, setProducts, filteredProducts }) {
  return (
    <header className="container-header">
      <div className="header-imagem">
        <img src={Logo} alt="logo" />
      </div>
      <SearchInput
        products={products}
        setProducts={setProducts}
        filteredProducts={filteredProducts}
      />
    </header>
  );
}

export default Header;
