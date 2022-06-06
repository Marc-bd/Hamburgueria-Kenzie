import { useState } from "react";
import toast from "react-hot-toast";
import { ProductListUl } from "./style";

function ProductList({ listProduct, handle }) {
  return (
    <div className="containerAll">
      <ProductListUl>
        {listProduct?.map((product, index) => (
          <li key={index}>
            <div className="containerImg">
              <img src={product.img} alt={"Foto " + product.name} />
            </div>
            <div className="containerInfo">
              <h3>{product.name}</h3>
              <span className="categoryProduct">{product.category}</span>
              <p>
                R$<span className="priceProduct">{product.price}</span>
              </p>
              <button onClick={() => handle(product.id)}>Adicionar</button>
            </div>
          </li>
        ))}
      </ProductListUl>
    </div>
  );
}

export default ProductList;
