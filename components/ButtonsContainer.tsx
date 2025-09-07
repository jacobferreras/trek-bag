import React from "react";
import Button from "./Button";
import { buttonName } from "../lib/constant";

interface ButtonsContainerProps {}

const ButtonsContainer = () => {
  return (
    <>
      <fieldset className="fieldset bg-transparent border-base-300 rounded-box w-xs border p-4 text-black">
        <Button name="Mark All as Completed" />
        <Button name="Mark All as Incomplete" />
        <Button name="Remove All Items" />
      </fieldset>
    </>
  );
};

export default ButtonsContainer;
