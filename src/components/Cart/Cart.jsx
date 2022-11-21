import {useEffect, useContext} from "react";
import Modal from "../Modal/Modal";
import CartItem from "./CartItem";
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

  const handleRemoveCartItem = id => {};
  const handleAddCartItem = item => {};

  const cartItems = (
    <ul className="list list__modal">
      {cartCtx.items.map(item => (
        <CartItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          price={item.price}
          onRemove={handleRemoveCartItem.bind(null, item.id)}
          onAdd={handleAddCartItem.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal hideCartModal={onHideCartModal}>
      {cartItems}
      <div className="modal__amount">
        <span className="modal__amount--text">Total amount</span>
        <span className="modal__amount--number">{totalAmount}</span>
      </div>
      <div className="modal__cta">
        <button className="cta cta__cancel" onClick={onHideCartModal}>Close</button>
        {hasItems && <button className="cta cta--success">Order</button>}
      </div>
    </Modal>
  )
}

export default Cart;
