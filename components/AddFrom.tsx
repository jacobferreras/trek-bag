import React from "react";

interface AddFromProps {
  inputRef?: React.RefObject<HTMLInputElement | null>;
  text: string;
  onTextChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAddItem?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const AddFrom = ({ inputRef, text, onTextChange, onAddItem }: AddFromProps) => {
  return (
    <>
      <fieldset className="fieldset bg-transparent border-base-300 rounded-box w-xs border p-4 text-black">
        <h1 className="text-xl">Add Item</h1>
        <div className="join">
          <input
            ref={inputRef}
            type="text"
            className="input join-item bg-transparent border-2 border-gray-400 text-black w-full"
            placeholder="Product name"
            value={text}
            onChange={onTextChange}
            autoFocus
          />
        </div>
        <button className="btn join-item bg-[#48392a]" onClick={onAddItem}>
          Add to List
        </button>
      </fieldset>
    </>
  );
};

export default AddFrom;
