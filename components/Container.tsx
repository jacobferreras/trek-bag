import React from "react";
import FilterButton from "./FilterButton";

const Container = () => {
  return (
    <>
      <div className="card w-96 bg-[#ffffff] card-xl shadow-sm">
        <div className="card-body">
          <FilterButton />
        </div>
      </div>
    </>
  );
};

export default Container;
