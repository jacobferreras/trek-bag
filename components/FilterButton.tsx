import React from "react";

interface FilterButtonProps {
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const FilterButton = ({ onChange }: FilterButtonProps) => {
  return (
    <>
      <select
        className="select select-bordered w-100 max-w-lg bg-[#ffffff] border-2 border-gray-400 text-black"
        onChange={onChange}
      >
        <option value="all">Sort By Default</option>
        <option value="packed">Sort By Packed</option>
        <option value="unpacked">Sort By Unpacked</option>
      </select>
    </>
  );
};

export default FilterButton;
