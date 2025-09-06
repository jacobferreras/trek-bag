import React from "react";
import { ImCross } from "react-icons/im";

const List = () => {
  return (
    <>
      <ul className="list bg-base-white rounded-box shadow-md text-black w-100">
        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
          Your Items
        </li>

        <li className="list-row w-full flex flex-row justify-between items-center p-4">
          <div className="flex flex-row gap-4 items-center">
            <input
              type="checkbox"
              className="checkbox checkbox-neutral"
              checked
            />

            <h1>First Item</h1>
          </div>
          <div>
            <button className="btn btn-square btn-ghost">
              <ImCross />
            </button>
          </div>
        </li>
      </ul>
    </>
  );
};

export default List;
