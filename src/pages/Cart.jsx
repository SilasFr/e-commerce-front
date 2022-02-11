import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartHeader, Container } from "./Components";

export default function Cart() {
  const navigate = useNavigate();
  const [cart, setCart] = useState();

  useEffect(() => {
    const checkout = localStorage.getItem("checkout");
    setCart(JSON.parse(checkout));
  }, []);
  if (!cart) {
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

        <div className="cart">
          <p>O CARRINHO DE COMPRAS ESTÁ VAZIO</p>
        </div>
      </Container>
    );
  }
  console.log(cart);
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

      <div className="cart">
        <p>{cart.name}</p>
        <p>{cart.price}</p>
        <p>{cart.qty}</p>
      </div>
    </Container>
  );
}
