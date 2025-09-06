import React from "react";

interface AddFromProps {
  text: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const AddFrom = ({ text, handleChange, handleClick }: AddFromProps) => {
  return (
    <>
      <fieldset className="fieldset bg-transparent border-base-300 rounded-box w-xs border p-4 text-black">
        <h1 className="text-xl">Add Item</h1>
        <div className="join">
          <input
            type="text"
            className="input join-item bg-transparent border-2 border-gray-400 text-black w-full"
            placeholder="Product name"
            value={text}
            onChange={handleChange}
            autoFocus
          />
        </div>
        <button className="btn join-item bg-[#48392a]" onClick={handleClick}>
          Add to List
        </button>
      </fieldset>
    </>
  );
};

export default AddFrom;
