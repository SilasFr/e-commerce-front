import { ProductsRender } from "./Components";
import Dinero from "dinero.js";
import { useNavigate } from "react-router-dom";

export default function CategoryRender({ products, category }) {
  const navigate = useNavigate();
  function handleSelection(id) {
    navigate(`/product/${category}/${id}`);
  }
  return (
    <ProductsRender>
      {products.map((product) => {
        return (
          <div
            className="product"
            key={product.id}
            onClick={() => handleSelection(product.id)}
          >
            <div className="img">
              <img src={product.url} alt="" />
            </div>
            <p className="title">{product.name}</p>
            <p className="price">
              {Dinero({
                amount: parseInt(product.price),
                currency: "BRL",
                precision: 2,
              })
                .toFormat("$0,0.00")
                .replace(".", ",")}
            </p>
          </div>
        );
      })}
    </ProductsRender>
  );
}
