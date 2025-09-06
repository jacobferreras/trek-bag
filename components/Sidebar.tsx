import React from "react";
import AddFrom from "./AddFrom";
import ButtonsContainer from "./ButtonsContainer";

const Sidebar = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <AddFrom />
        <ButtonsContainer />
      </div>
    </>
  );
};

export default Sidebar;
