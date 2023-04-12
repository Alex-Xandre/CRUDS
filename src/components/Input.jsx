import React from "react";

const Input = (props) => {
  const {
    type,
    id,
    label,
    handleChange,
    defaultValue,

    value,
    disabled,
  } = props;

  return (
    <div className="my-4 relative">
      <input
        type={type}
        placeholder=" "
        id={id}
        value={value}
        defaultValue={defaultValue}
        disabled={disabled}
        onChange={(event) => {
          let val = event.target.value;
          if (handleChange) {
            handleChange(id, val);
          }
        }}
        className="z-20 block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded border border-gray-400 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer placeholder-gray-500 focus:border-2 "
      />
      <label
        htmlFor="floating_outlined"
        className="z-10 absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2  origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
