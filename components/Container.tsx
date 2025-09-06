import React from "react";
import FilterButton from "./FilterButton";
import List from "./List";
import Sidebar from "./Sidebar";

const Container = () => {
  return (
    <>
      <div className="card w-auto bg-[#ffffff] card-xl shadow-sm">
        <div className="card-body flex flex-row justify-between gap-4">
          <List />
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default Container;
