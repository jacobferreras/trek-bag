import React from "react";

const FilterButton = () => {
  return (
    <>
      <select className="select select-bordered w-full max-w-xs">
        <option selected>Sort By Default</option>
        <option>Sort By Packed</option>
        <option>Sord By Unpacked</option>
      </select>
    </>
  );
};

export default FilterButton;
