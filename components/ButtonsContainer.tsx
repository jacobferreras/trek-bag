import React from "react";
import Button from "./Button";
import { buttonName } from "../lib/constant";

interface ButtonsContainerProps {
  onRemoveAllItems?: () => void;
  onMarkAllAsCompleted?: () => void;
  onMarkAllAsIncomplete?: () => void;
}

const ButtonsContainer = ({
  onRemoveAllItems,
  onMarkAllAsCompleted,
  onMarkAllAsIncomplete,
}: ButtonsContainerProps) => {
  return (
    <>
      <fieldset className="fieldset bg-transparent border-base-300 rounded-box w-xs border p-4 text-black">
        <Button name="Mark All as Completed" onClick={onMarkAllAsCompleted} />
        <Button name="Mark All as Incomplete" onClick={onMarkAllAsIncomplete} />
        <Button name="Remove All Items" onClick={onRemoveAllItems} />
      </fieldset>
    </>
  );
};

export default ButtonsContainer;
