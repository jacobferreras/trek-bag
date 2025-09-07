import React from "react";

interface ButtonProps {
  name: string;
  onClick?: () => void;
}

const Button = ({ name, onClick }: ButtonProps) => {
  return (
    <>
      <button className="btn join-item bg-[#48392a]" onClick={onClick}>
        {name}
      </button>
    </>
  );
};

export default Button;
