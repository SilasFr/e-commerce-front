import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../services/api";
import CategoryRender from "./CategoryRender";
import { CatContainer, NavHeader } from "./Components";

export default function Category() {
  const { category } = useParams();
  const [products, setProducts] = useState();

  useEffect(() => {
    const promise = api.loadCategory(category);
    promise.then((response) => {
      setProducts(response);
    });
  }, [category]);

  if (!products) {
    return <h1>Carregando</h1>;
  }
  return (
    <>
      <NavHeader></NavHeader>
      <CatContainer>
        <div className="header">
          <Link to="/home">
            <span>Início / </span>
          </Link>
          <span className="highlight">{products.name}</span>
        </div>
        <CategoryRender products={products.products} category={products.name} />
      </CatContainer>
    </>
  );
}
