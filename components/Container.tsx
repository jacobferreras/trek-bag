import React from "react";
import List from "./List";
import AddFrom from "./AddFrom";
import ButtonsContainer from "./ButtonsContainer";
import FilterButton from "./FilterButton";

import HeaderCount from "./HeaderCount";

const Container = () => {
  return (
    <>
      <div className="card w-auto bg-[#ffffff] card-xl shadow-sm">
        <HeaderCount />
        <div className="card-body flex flex-row justify-between gap-4 overflow-y-scroll h-[80vh]">
          <div className="flex flex-col gap-4 w-2/3">
            <FilterButton />
            <h1 className="text-xl text-black">Your Items</h1>
            <List />
          </div>

          <div className="flex flex-col gap-4 sticky top-0 z-10">
            <AddFrom />
            <ButtonsContainer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Container;
