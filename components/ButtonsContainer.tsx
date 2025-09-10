"use client";
import Button from "./Button";
import useItemStore from "@/stores/useItemStore";

const ButtonsContainer = () => {
  const onRemoveAllItems = useItemStore((state) => state.removeAllItems);
  const onMarkAllAsCompleted = useItemStore(
    (state) => state.markAllAsCompleted
  );
  const onMarkAllAsIncomplete = useItemStore(
    (state) => state.markAllAsIncomplete
  );

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
