import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./App.css";
import CartProduct from "./components/Cart/CartProduct";
import api from "./components/Data/database";
import Header from "./components/Header";
import { MainContain } from "./components/MainContain/style";
import ProductList from "./components/ProductList";

function App() {
  const [listProduct, setListProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [filterInput, setFilterInput] = useState([]);

  useEffect(() => {
    api
      .get("products")
      .then((res) => {
        setListProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleClick(id) {
    let findProd = listProduct.find((elem) => elem.id === id);
    const existProd = cart.find((elem) => elem.id === id);

    if (!existProd) {
      setCart([...cart, { ...findProd, qtd: 1 }]);
    } else {
      existProd.qtd++;
      setCart([...cart]);
    }
  }

  function removeItem(id) {
    console.log(id);
    const existProd = cart.find((elem) => elem.id === id);

    if (existProd.qtd > 1) {
      existProd.qtd--;
      setCart([...cart]);
    } else {
      setCart(cart.filter((elem) => elem.id !== id));
    }
  }

  const totalValue = cart.reduce(
    (valorAnterior, valorAtual) =>
      valorAnterior + valorAtual.price * valorAtual.qtd,
    0
  );

  function removeAll() {
    setCart([]);
  }

  function searchProduct(search) {
    const searchProd = listProduct.filter(
      (prod) =>
        prod.name
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "") == search.toLowerCase()
    );

    setFilterInput(searchProd);
  }

  return (
    <div className="App">
      <>
        <Header searchProduct={searchProduct}></Header>
        <MainContain>
          <ProductList
            listProduct={filterInput.length > 0 ? filterInput : listProduct}
            handle={handleClick}
          ></ProductList>

          <CartProduct
            cart={cart}
            remove={removeItem}
            total={totalValue}
            removeAll={removeAll}
          ></CartProduct>
        </MainContain>
      </>
    </div>
  );
}

export default App;
