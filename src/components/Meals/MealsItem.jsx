import { useContext } from "react";
import MealsForm from "./MealsForm";
import CartContext from "../Store/CartContext";

const MealsItem = (props) => {
  const cartCtx = useContext(CartContext);
  const handleAddToCart = amount => {
    cartCtx.addItem({
      id: props.id,
      title: props.title,
      amount: amount,
      price: props.price
    });
  }
  return (
    <li className="list-item">
      <div className="list-item__content">
        <h3 className="list-item__content--title">{props.title}</h3>
        <p className="list-item__content--description">{props.description}</p>
        <span>${props.price}</span>
      </div>
      <MealsForm id={props.id} onAddToCart={handleAddToCart} />
    </li>
  )
}

export default MealsItem;
