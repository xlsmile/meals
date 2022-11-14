import React from "react";

const Input = React.forwardRef(({ input, label }, ref) => {
  return (
    <>
      <label htmlFor={input.id} className="form__label form__label--centered">{label}</label>
      <input id={input.id} ref={ref} {...input} className="form__input form__input--centered" />
    </>
  )
});

export default Input;
