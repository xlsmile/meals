import {useEffect, useContext} from "react";
import Modal from "../Modal/Modal";
import CartContext from "../Store/CartContext";

const Cart = ({onHideCartModal}) => {

  useEffect(() => {
    document.addEventListener("keyup", (e) => {
      if (e.key === "Escape") {
        onHideCartModal();
      }
    });
  }, [onHideCartModal]);

  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItems = <ul className="modal__list">{cartCtx.items.map(item => <li>{item.title}</li>)}</ul>;
  return (
    <Modal hideCartModal={onHideCartModal}>
      {cartItems}
      <div className="modal__amount">
        <span>Total amount </span>
        <span>{totalAmount}</span>
      </div>
      <div className="modal__cta">
        <button className="cta cta__cancel" onClick={onHideCartModal}>Close</button>
        {hasItems && <button className="cta cta--success">Order</button>}
      </div>
    </Modal>
  )
}

export default Cart;
