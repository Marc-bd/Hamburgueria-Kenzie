import { CartUl, ThemeCart } from "./style";

function CartProduct({ cart, remove, total, removeAll }) {
  return (
    <ThemeCart>
      <div className="headerCartProduct">
        <h2>Carrinho de Compras</h2>
      </div>
      <div className="containerCart">
        {cart.length === 0 ? (
          <div className="containerVazio">
            <h2>Sua sacola está vazia</h2>
            <p>Adicione Itens</p>
          </div>
        ) : (
          <>
            <CartUl>
              {cart?.map((product, index) => (
                <li key={index} className="cardProduct">
                  <div className="containerImagemProduto">
                    <img
                      src={product.img}
                      alt={`Imagem do Produto ${product.name}`}
                    />
                  </div>
                  <div className="containerInfo">
                    <h3>{product.name}</h3>
                    <span>{product.category}</span>
                  </div>
                  <div className="containerRemove">
                    <button onClick={() => remove(product.id)}>Remover</button>
                    <span>x {product.qtd}</span>
                  </div>
                </li>
              ))}
            </CartUl>
            <div className="containerInfoFinal">
              <p>Total</p>{" "}
              <span className="valueCart">R${total.toFixed(2)}</span>
            </div>
            <button onClick={(e) => removeAll(e)}>Remover Todos</button>
          </>
        )}
      </div>
    </ThemeCart>
  );
}

export default CartProduct;
