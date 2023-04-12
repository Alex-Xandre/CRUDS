import React from "react";

const Button = ({ text, onClick, icon, cN }) => {
  return (
    <button
      className={`bg-sky-600 py-2 px-8 rounded text-white m-0 flex align-center justify-center text-sm ${cN} `}
      onClick={onClick}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
