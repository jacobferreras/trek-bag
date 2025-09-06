"use client";
import React from "react";
import List from "./List";
import AddFrom from "./AddFrom";
import ButtonsContainer from "./ButtonsContainer";
import { useAddItems } from "../hooks/useAddItems";
import FilterButton from "./FilterButton";

const Container = () => {
  const { items, text, totalItems, handleChange, handleClick } = useAddItems();

  return (
    <>
      <div className="card w-auto bg-[#ffffff] card-xl shadow-sm">
        <h1 className="text-xl font-bold text-black text-end pt-4 pr-12">
          0/{totalItems} Items packed
        </h1>
        <div className="card-body flex flex-row justify-between gap-4">
          <div className="flex flex-col gap-4 w-2/3">
            <FilterButton />
            <h1 className="text-xl text-black">Your Items</h1>
            {items.map((item) => (
              <List
                key={item.id}
                item={item.text}
                isChecked={item.isCompleted}
              />
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <AddFrom
              text={text}
              handleChange={handleChange}
              handleClick={handleClick}
            />
            <ButtonsContainer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Container;
