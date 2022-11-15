const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className="list-item list-item--modal">
      <div className="list-item__content--modal">
        <h3 className="list-item__content--heading">{props.title}</h3>
        <div>
        <span className="list-item__content--price">{price}</span>
        <span className="list-item__content--amount"><i className="list-item__icon fa-solid fa-times fa-sm"></i>{props.amount}</span>
        </div>
      </div>
      <div className="form__group--row">
        <button className="cta cta--decrease" onClick={props.onRemove}><i className="fa-solid fa-minus-circle"></i></button>
        <button className="cta cta--increase" onClick={props.onAdd}><i className="fa-solid fa-plus-circle"></i></button>
      </div>
    </li>
  );
};

export default CartItem;
