import React from "react";

const InputText = ({ name, value, changeHandler, placeholder }) => {
  return (
    <input
      type='text'
      name={name}
      value={value}
      className='main-input-text'
      onChange={changeHandler}
      placeholder={placeholder}
    />
  );
};

export default InputText;
