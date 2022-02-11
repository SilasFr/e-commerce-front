import { useEffect, useState } from "react";
import { Button, Container, NavHeader, Product } from "./Components";
import api from "../services/api";
import { useNavigate, useParams } from "react-router-dom";
import Dinero from "dinero.js";

export default function Products() {
  const params = useParams();
  const [product, setProduct] = useState();
  const [size, setSize] = useState("");
  const [qty, setQty] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const promise = api.getSingleProduct(params);
    promise.then((response) => {
      console.log(response.data);
      setProduct(response.data);
    });
    promise.catch((error) => {
      console.log(error);
    });
  }, []);

  function handleSizeClick(e) {
    if (size === e.target.innerText) {
      setSize("");
      return;
    }
    setSize(e.target.innerText);
  }

  function handleBuy() {
    const checkout = {
      ...product,
      size,
      qty,
    };
  }
  if (!product) {
    return <h1>Carregando</h1>;
  }
  const price = Dinero({
    amount: parseInt(product.price),
    currency: "BRL",
    precision: 2,
  })
    .toFormat("$0,0.00")
    .replace(".", ",");
  return (
    <Container>
      <NavHeader></NavHeader>
      <Product>
        <div className="product">
          <div className="img">
            <img src={product.url} alt={product.name} />
          </div>

          <div className="tag">
            <div className="header">
              <p className="name">{product.name}</p>
              <p className="price">{price}</p>
            </div>
            <div className="horizontal-divider"></div>

            <div className="method">
              <p>
                <span className="strong">3</span>X DE{" "}
                <span className="strong">R$ 33,33</span>
              </p>
              <div className="card-flags">
                <span>
                  <img
                    src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/visa@2x.png"
                    alt="visa"
                  />
                </span>
                <span>
                  <img
                    src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mastercard@2x.png"
                    alt="master-card"
                  />
                </span>
              </div>
            </div>

            <div className="horizontal-divider"></div>
            <div className="sizing">
              <p>Escolha seu tamanho</p>
              <div className="sizes">
                <button
                  type="button"
                  onClick={handleSizeClick}
                  className={size === "P" ? "active" : ""}
                >
                  P
                </button>
                <button
                  type="button"
                  onClick={handleSizeClick}
                  className={size === "M" ? "active" : ""}
                >
                  M
                </button>
                <button
                  type="button"
                  onClick={handleSizeClick}
                  className={size === "G" ? "active" : ""}
                >
                  G
                </button>
                <button
                  type="button"
                  onClick={handleSizeClick}
                  className={size === "GG" ? "active" : ""}
                >
                  GG
                </button>
              </div>
            </div>

            <div className="horizontal-divider"></div>
            <div className="qtt">
              <p>QUANTIDADE</p>
              <input
                type="number"
                name="quantity"
                value={qty}
                onChange={(e) => {
                  setQty(e.target.value);
                }}
              />
            </div>
          </div>
          <Button onClick={handleBuy}>COMPRAR</Button>
        </div>
      </Product>
    </Container>
  );
}
