import { useRef, useState } from "react";
import Input from "../Form/Input";

const MealsForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const handleSubmit = e => {
    e.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 12
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className="form__group" onSubmit={handleSubmit}>
      <Input
        ref = {amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "100",
          step: "1",
          defaultValue: "1"
      }} />
      <button className="cta cta--add">Add to <i className="fa-solid fa-shopping-cart"></i></button>
      {!amountIsValid && <p>Please, enter a valid amount (1-12)</p>}
    </form>
  )
}

export default MealsForm;
