import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";

const Header = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #fcfcf7;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.15);

  padding: 0px 20px;

  color: #bc9e77;
  position: fixed;
  top: 0;
  z-index: 1;
  .nav {
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 10px;
    position: relative;
    .logo {
      width: 40px;
      position: absolute;
      left: 0;
      top: 0;
      img {
        width: 100%;
      }
    }

    ion-icon {
      font-size: 30px;
    }
    .cart {
      font-size: 28px;
      display: flex;
      align-items: center;
    }
  }
`;
const Container = styled.div`
  padding-top: 60px;
  width: 100%;
  height: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #fcf7f7;
`;
const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  padding: 0 15px;

  margin: 30px 0px;
`;
const Input = styled.input`
  width: 100%;
  height: 50px;

  border: 1px solid #decfc3;

  background-color: #fff;

  padding: 15px 15px;

  color: #000;

  font-style: normal;
  font-weight: normal;
  font-size: 17.976px;
  line-height: 22px;
  text-align: justify;

  ::placeholder {
    font-style: normal;
    font-weight: normal;
    font-size: 17.976px;
    line-height: 22px;
    text-align: justify;

    color: #000;
  }
`;
const Button = styled.button`
  width: 100%;
  height: 60px;

  border: none;

  background-color: #bc9e77;

  color: #fcfcf7;

  font-style: normal;
  font-weight: normal;
  font-size: 17.976px;
  line-height: 22px;
  text-align: center;

  margin-top: 20px;
`;

const Product = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  color: #91613a;
  .product {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    .img {
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 95%;
        filter: drop-shadow(0 0 0.25rem gray);
      }
    }
    .tag {
      width: 93%;
      .header {
        height: 60px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        p.name {
          font-size: 20px;
        }
        p.price {
          font-size: 30px;
          font-weight: bold;
        }
      }
      .horizontal-divider {
        margin: 8px auto;
        width: 100%;
        border-bottom: 1px solid #91613a;
      }
      .method {
        height: 50px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        p {
          .strong {
            font-weight: bold;
          }
        }

        .card-flags {
          span {
            img {
              width: 30px;
            }
          }
        }
      }

      .sizing {
        height: 60px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        font-size: 18px;
        .sizes {
          display: flex;
          gap: 10px;
          button {
            all: unset;
            width: 20px;
            height: 20px;
            font-size: 12px;
            text-align: center;
            border: 2px solid #91613a;
          }
          .active {
            transition: all 500ms ease-in-out;
            color: #fff;
            background-color: #91613a;
          }
        }
      }

      .qtt {
        height: 30px;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;

        input {
          width: 50px;
          height: 25px;
          border: 1px solid #91613a;
        }
      }
    }
  }
`;

const CartHeader = styled.div`
  position: fixed;
  top: 0;

  display: flex;
  align-items: center;
  gap: 15px;
  padding: 0 30px;
  width: 100%;
  height: 60px;
  background-color: #fcfcf7;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.15);

  color: #91613a;

  ion-icon {
    font-size: 25px;
  }
  p {
    font-size: 20px;
  }
`;

function NavHeader() {
  const navigate = useNavigate();

  return (
    <Header>
      <div className="nav">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ion-icon
          name="arrow-dropleft"
          className="return"
          onClick={() => navigate(-1)}
        ></ion-icon>
        <div
          className="cart"
          onClick={() => {
            navigate("/cart");
          }}
        >
          <ion-icon name="cart"></ion-icon>
        </div>
      </div>
    </Header>
  );
}

const Banners = styled.div`

  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  margin: 16px 0px;
`;

const Banner = styled.div`
  width: 100vw;
  position: relative;
  text-align: center;

  .textImage {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    color: #946540;
    font-size: 22px;
  }

  img {
    width: 100vw;
  }
`;

const HomeProducts = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;

  padding: 0px 10px;
`;

const HomeProduct = styled.div`
  width: calc(50% - 10px);
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;

  color: #946540;

  img {
    width: 100%;
  }

  .product-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;

    margin-top: 4px;

    .product-name {
      font-weight: normal;
      text-align: center;
    }

    .product-price {
      font-weight: 700;
    }

    .product-price-2 {
      justify-self: flex-end;
      font-size: 14px;

      span {
        font-weight: bold;
      }
    }
  }
`;

const Footer = styled.div`
  width: 100%;
  padding-left: 20px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .navigation {
    margin-bottom: 20px;

    .title {
      font-size: 14px;
      font-weight: bold;
      color: #64543c;
      margin-bottom: 16px;
    }

    .links {
      a {
        text-decoration: none;
        color: #64543c;
      }

      display: flex;
      flex-direction: column;
      gap: 16px;
    }
  }

  .payment-methods {
    margin-bottom: 20px;

    .title {
      font-size: 14px;
      font-weight: bold;
      color: #64543c;
      margin-bottom: 16px;
    }

    .methods {
      display: flex;
      flex-wrap: wrap;
      gap: 4px;

      img {
        width: 40px;
      }
    }
  }

  .contact {
    .title {
      font-size: 14px;
      font-weight: bold;
      color: #64543c;
      margin-bottom: 16px;
    }

    .contact-methods {
      display: flex;
      flex-direction: column;
      gap: 16px;

      font-size: 14px;
      color: #64543c;
    }
  }
`;

const CatContainer = styled.div`
  padding: 0 15px;
  padding-top: 70px;
  padding-bottom: 40px;
  width: 100%;
  min-height: 100vh;
  height: fit-content;
  color: #64543c;
  background-color: #fcf7f7;

  .header {
    margin: 10px 15px;
    a {
      color: inherit;
    }
    .highlight {
      font-weight: bold;
    }
  }
`;

const ProductsRender = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  .product {
    width: 150px;
    height: 200px;
    margin-bottom: 50px;

    .img {
      width: 100%;
      height: 100%;
      img {
        height: 100%;
        width: 100%;
        min-height: 100px;
      }
    }
    p {
      text-align: center;
      color: #64543c;
      font-weight: 300;
    }

    .title {
      width: 100%;
      text-overflow: ellipsis;
      margin: 5px 0;
    }
  }
`;





export {
  Container,
  Header,
  Form,
  Input,
  Button,
  Product,
  NavHeader,
  CartHeader,
  Banners,
  Banner,
  HomeProducts,
  HomeProduct,
  Footer,
  CatContainer,
  ProductsRender,
};
