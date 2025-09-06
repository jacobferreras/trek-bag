import React from "react";

const FilterButton = () => {
  return (
    <>
      <select className="select select-bordered w-full max-w-xs bg-[#ffffff] border-2 border-gray-400 text-black">
        <option selected>Sort By Default</option>
        <option>Sort By Packed</option>
        <option>Sort By Unpacked</option>
      </select>
    </>
  );
};

export default FilterButton;
