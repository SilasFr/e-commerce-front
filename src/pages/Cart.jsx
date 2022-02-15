import dinero from "dinero.js";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import api from "../services/api";
import CartRender from "./CartRender";
import { CartBody, CartFooter, CartHeader, Container } from "./Components";

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
        <Container>
          <div className="cart">
            <p>O CARRINHO DE COMPRAS ESTÁ VAZIO</p>
          </div>
        </Container>
      </>
    );
  }

  function calcSubtotal() {
    let value = 0;
    cart.cart.forEach((item) => {
      value += parseInt(item.price) * parseInt(item.qty);
    });
    return value;
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
        <CartFooter>
          <div>
            <p>Subtotal</p>
            <input
              type="text"
              value={priceFormater(calcSubtotal())}
              disabled={true}
            />
          </div>
          <div>
            <Link to="/checkout">
              <button>Finalizar Compra</button>
            </Link>
          </div>
        </CartFooter>
      </CartBody>
    </Container>
  );
}
