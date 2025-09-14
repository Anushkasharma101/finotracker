import React from "react";

const AuthButtons = ({children, onClick}) => {
  return (
      <button
      onClick={onClick}
      className='w-full h-full cursor-pointer text-black bg-white rounded-lg'
    >
      {children}
    </button>
  );
};

export default AuthButtons;
