import { CartHeader, Container } from "./Components";

export default function Cart() {
  return (
    <Container>
      <CartHeader>
        <ion-icon name="arrow-dropleft"></ion-icon>
        <p>Carrinho de compras</p>
      </CartHeader>

      <div className="cart">
        <p>O CARRINHO DE COMPRAS ESTÁ VAZIO</p>
      </div>
    </Container>
  );
}
