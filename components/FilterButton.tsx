import React from "react";

const FilterButton = () => {
  return (
    <>
      <select className="select select-bordered w-100 max-w-lg bg-[#ffffff] border-2 border-gray-400 text-black ">
        <option value="">Sort By Default</option>
        <option value="packed">Sort By Packed</option>
        <option value="unpacked">Sort By Unpacked</option>
      </select>
    </>
  );
};

export default FilterButton;
