import React from "react";
import FilterButton from "./FilterButton";
import List from "./List";
import AddFrom from "./AddFrom";

const Container = () => {
  return (
    <>
      <div className="card w-auto bg-[#ffffff] card-xl shadow-sm">
        <div className="card-body flex flex-row justify-between gap-4">
          <div>
            <FilterButton />
            <List />
          </div>

          <AddFrom />
        </div>
      </div>
    </>
  );
};

export default Container;
