import dinero from "dinero.js";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import api from "../services/api";
import { Container, NavHeader } from "./Components";

export default function Checkout() {
  const { token } = useContext(AuthContext);

  const [document, setDocument] = useState();

  useEffect(() => {
    const promise = api.getCart(token);
    promise.then((response) => {
      console.log(response);
      console.log(response);
      setDocument(response.data);
    });
    promise.catch((error) => {
      alert(error.response);
    });
  }, []);

  function handleBuy(e) {
    e.preventDefault();
    const promise = api.checkout(document, token);
    promise.then((response) => {
      console.log(response);
    });
    promise.catch((error) => {
      alert(error);
    });
  }

  function priceFormater(num) {
    return dinero({
      amount: parseInt(num),
      precision: 2,
      currency: "BRL",
    })
      .toFormat("$0,0.00")
      .toString()
      .replace(".", ",");
  }
  if (!document || !document.cart) {
    return <h1>Carregando...</h1>;
  }
  return (
    <>
      <NavHeader></NavHeader>
      <Container>
        <div className="carrinho">
          <h3>Carrinho</h3>
          {document.cart.map((item) => {
            return (
              <div>
                <p>{item.name}</p>
                <span>{priceFormater(item.price)}</span>
              </div>
            );
          })}
        </div>
        <form className="checkout-form" onSubmit={handleBuy}>
          <h3>Entrega</h3>
          <input
            required
            type="text"
            placeholder="Endereço"
            onChange={(e) => {
              setDocument({ ...document, adress: e.target.value });
            }}
          />
          <button>Finalizar compra</button>
        </form>
      </Container>
    </>
  );
}
