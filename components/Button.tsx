import React from "react";

interface ButtonProps {
  name: string;
}

const Button = ({ name }: ButtonProps) => {
  return (
    <>
      <button className="btn join-item bg-[#48392a]">{name}</button>
    </>
  );
};

export default Button;
