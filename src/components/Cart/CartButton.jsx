import { useContext } from "react";
import CartContext from "../Store/CartContext";

const CartButton = ({showCartModal}) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className="cta cta--cart" onClick={showCartModal}>
      <i className="fa-solid fa-shopping-cart"></i>
        Cart
      <span className="counter__cart">{numberOfCartItems}</span>
    </button>
  )
}

export default CartButton;
