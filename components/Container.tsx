import React from "react";
import List from "./List";
import HeaderCount from "./HeaderCount";
import Sidebar from "./Sidebar";

const Container = () => {
  return (
    <>
      <div className="card w-auto bg-[#ffffff] card-xl shadow-sm">
        <HeaderCount />
        <div className="card-body flex flex-row justify-between gap-4 overflow-y-scroll h-[80vh]">
          <List />
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default Container;
