import { Container, NavHeader } from "./Components";

export default function Checkout() {
  return (
    <>
      <NavHeader></NavHeader>
      <Container>
        <form action="">
          <input type="text" placeholder="Endereço" />
          <input type="text" />
        </form>
      </Container>
    </>
  );
}
