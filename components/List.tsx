import React from "react";

const List = () => {
  return (
    <>
      <ul className="list bg-base-white rounded-box shadow-md text-black">
        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
          Your Items
        </li>

        <li className="list-row">
          <input
            type="checkbox"
            className="checkbox checkbox-neutral"
            checked
          />

          <h1>First Item</h1>

          <button className="btn btn-square btn-ghost">
            <svg
              className="size-[1.2em]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
              >
                <path d="M6 3L20 12 6 21 6 3z"></path>
              </g>
            </svg>
          </button>
        </li>
      </ul>
    </>
  );
};

export default List;
