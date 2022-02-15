import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import api from "../services/api";
import CartRender from "./CartRender";
import { CartBody, CartHeader, Container } from "./Components";

export default function Cart() {
  const { token } = useContext(AuthContext);

  const navigate = useNavigate();
  const [cart, setCart] = useState();

  useEffect(() => {
    const promise = api.getCart(token);
    promise.then((response) => {
      setCart(response.data);
    });
    promise.catch((error) => {
      alert(error.response);
    });
  }, []);

  if (!cart || !cart.cart || cart.cart.length === 0) {
    return (
      <>
        <CartHeader>
          <ion-icon
            name="arrow-dropleft"
            onClick={() => {
              navigate(-1);
            }}
          ></ion-icon>
          <p>Carrinho de compras</p>
        </CartHeader>
        <div className="cart">
          <p>O CARRINHO DE COMPRAS ESTÁ VAZIO</p>
        </div>
      </>
    );
  }
  return (
    <Container>
      <CartHeader>
        <ion-icon
          name="arrow-dropleft"
          onClick={() => {
            navigate(-1);
          }}
        ></ion-icon>
        <p>Carrinho de compras</p>
      </CartHeader>

      <CartBody>
        <CartRender cart={cart.cart} setCart={setCart} />
      </CartBody>
    </Container>
  );
}
