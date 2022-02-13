import { useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import { Container, NavHeader } from "./Components";

export default function Category() {
  const { category } = useParams();

  useEffect(() => {
    const promise = api.loadCategory(category);
    promise.then((response) => {
      console.log(response);
    });
  });
  return (
    <>
      <NavHeader></NavHeader>
      <Container>
        <h1>kabhl\kshdbf</h1>
        <h1>kabhl\kshdbf</h1>
        <h1>kabhl\kshdbf</h1>
        <h1>kabhl\kshdbf</h1>
      </Container>
    </>
  );
}
