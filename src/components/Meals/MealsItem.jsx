import {useContext} from "react";
import MealsForm from "./MealsForm";
import CartContext from "../Store/CartContext";

const MealsItem = ({id, title, price, description}) => {
  const cartCtx = useContext(CartContext);
  const handleAddToCart = amount => {
    cartCtx.addItem({
      id: id,
      title: title,
      amount: amount,
      price: price
    });
  }
  return (
    <li className="list-item">
      <div className="list-item__content">
        <h3 className="list-item__content--title">{title}</h3>
        <p className="list-item__content--description">{description}</p>
        <span>${price}</span>
      </div>
      <MealsForm id={id} onAddToCart={handleAddToCart} />
    </li>
  )
}

export default MealsItem;
