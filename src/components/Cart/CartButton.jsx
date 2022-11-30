import { useContext, useEffect, useState } from "react";
import CartContext from "../Store/CartContext";

const CartButton = ({ showCartModal }) => {
  const [btnIsHighlighted, setbtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${btnIsHighlighted ? "cta cta--cart bump" : "cta cta--cart"}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setbtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setbtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={showCartModal}>
      <i className="fa-solid fa-shopping-cart"></i>
      Cart
      <span className="counter__cart">{numberOfCartItems}</span>
    </button>
  );
};

export default CartButton;
