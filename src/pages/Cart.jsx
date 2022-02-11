import { useNavigate } from "react-router-dom";
import { CartHeader, Container } from "./Components";

export default function Cart() {
  const navigate = useNavigate();
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
