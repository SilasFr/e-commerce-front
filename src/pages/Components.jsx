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
    .cart {
      font-size: 28px;
      display: flex;
      align-items: center;
    }
    .menu {
      display: flex;
      align-items: center;
      font-size: 30px;
    }
  }
`;
const Container = styled.div`
  padding-top: 60px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #fcfcf7;
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
        <div
          className="cart"
          onClick={() => {
            navigate("/cart");
          }}
        >
          <ion-icon name="cart"></ion-icon>
        </div>
        <div className="menu">
          <ion-icon name="menu"></ion-icon>
        </div>
      </div>
    </Header>
  );
}

export {
  Container,
  Header,
  Form,
  Input,
  Button,
  Product,
  NavHeader,
  CartHeader,
};
