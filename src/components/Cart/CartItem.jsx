const CartItem = ({ price, title, amount, onRemove, onAdd }) => {
  const priceToFixed = `$${price.toFixed(2)}`;

  return (
    <li className="list-item list-item--modal">
      <div className="list-item__content--modal">
        <h3 className="list-item__content--heading">{title}</h3>
        <div>
          <span className="list-item__content--price">{priceToFixed}</span>
          <span className="list-item__content--amount">
            <i className="list-item__icon fa-solid fa-times fa-sm"></i>
            {amount}
          </span>
        </div>
      </div>
      <div className="form__group--row">
        <button className="cta cta--decrease" onClick={onRemove}>
          <i className="fa-solid fa-minus-circle"></i>
        </button>
        <button className="cta cta--increase" onClick={onAdd}>
          <i className="fa-solid fa-plus-circle"></i>
        </button>
      </div>
    </li>
  );
};

export default CartItem;
