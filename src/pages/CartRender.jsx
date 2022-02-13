import Dinero from "dinero.js";

export default function CartRender({ cart, setCart }) {
  function handleDelete() {
    setCart(null);
    return;
  }
  return (
    <div className="products">
      <div className="img">
        <img src={cart.url} alt={cart.name} />
      </div>
      <div className="product-info">
        <p className="product-name">
          <span>{cart.name}</span>
          <ion-icon
            onClick={handleDelete}
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
                if (cart.qty > 1) {
                  setCart({ ...cart, qty: cart.qty - 1 });
                }
              }}
            />
            <input
              className="display"
              type="number"
              value={cart.qty}
              onChange={(e) => {
                setCart({ ...cart, qty: e.target.value });
              }}
            />
            <input
              className="handle"
              type="button"
              value="+"
              onClick={() => {
                setCart({ ...cart, qty: cart.qty + 1 });
              }}
            />
          </div>
          <p>
            R${" "}
            {Dinero({
              amount: parseInt(cart.price) * parseInt(cart.qty),
              precision: 2,
              currency: "BRL",
            })
              .toFormat("0,0.00")
              .toString()
              .replace(".", ",")}
          </p>
        </div>
      </div>
    </div>
  );
}
