import Dinero from "dinero.js";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import api from "../services/api";

export default function CartRender({ cart, setCart }) {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleDelete(item) {
    const promise = api.deleteCartItem(item, token);
    promise.then((response) => {
      console.log(response.data);
      setCart([...cart]);
    });
    promise.catch((error) => {
      console.log(error.response);
    });
    return navigate("/cart");
  }

  function priceFormater(num, qty) {
    return Dinero({
      amount: parseInt(num) * parseInt(qty),
      precision: 2,
      currency: "BRL",
    })
      .toFormat("$0,0.00")
      .toString()
      .replace(".", ",");
  }

  return (
    <>
      {cart.map((item) => {
        return (
          <div className="products">
            <div className="img">
              <img src={item.url} alt={item.name} />
            </div>
            <div className="product-info">
              <p className="product-name">
                <span>{item.name}</span>
                <ion-icon
                  onClick={() => handleDelete(item)}
                  name="trash"
                  className="trash-icon"
                ></ion-icon>
              </p>
              <div className="qty-price">
                <div className="form">
                  <input
                    className="handle"
                    type="button"
                    value="-"
                    onClick={() => {
                      if (item.qty > 1) {
                        setCart(item.qty - 1);
                      }
                    }}
                  />
                  <input
                    className="display"
                    type="number"
                    value={item.qty}
                    onChange={(e) => {
                      // setCart({ ...cart, qty: e.target.value });
                    }}
                  />
                  <input
                    className="handle"
                    type="button"
                    value="+"
                    onClick={() => {
                      // setCart({ ...cart, qty: cart.qty + 1 });
                    }}
                  />
                </div>
                <p>{priceFormater(item.price, item.qty)}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
