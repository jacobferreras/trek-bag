"use client";
import React from "react";
import List from "./List";
import AddFrom from "./AddFrom";
import ButtonsContainer from "./ButtonsContainer";
import { useItems } from "../hooks/useItems";
import FilterButton from "./FilterButton";

const Container = () => {
  const {
    items,
    totalCompletedItems,
    text,
    totalItems,
    handleChange,
    handleAddItem,
    handleCompletedItems,
    handleDeleteItems,
    handleRemoveAllItems,
    handleMarkAllAsCompleted,
    handleMarkAllAsIncomplete,
    inputRef,
  } = useItems();

  return (
    <>
      <div className="card w-auto bg-[#ffffff] card-xl shadow-sm">
        <h1 className="text-xl font-bold text-black text-end pt-4 pr-12">
          {totalCompletedItems}/{totalItems} Items packed
        </h1>
        <div className="card-body flex flex-row justify-between gap-4">
          <div className="flex flex-col gap-4 w-2/3">
            <FilterButton />
            <h1 className="text-xl text-black">Your Items</h1>
            {items.length === 0 && (
              <h1 className="text-lg text-black text-center">No Items</h1>
            )}
            {items.map((item) => (
              <List
                key={item.id}
                item={item.text}
                isCompleted={item.completed}
                handleCompletedItems={() => handleCompletedItems(item.id)}
                onDeleteItem={() => handleDeleteItems(item.id)}
              />
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <AddFrom
              inputRef={inputRef}
              text={text}
              onTextChange={handleChange}
              onAddItem={handleAddItem}
            />
            <ButtonsContainer
              onRemoveAllItems={handleRemoveAllItems}
              onMarkAllAsCompleted={handleMarkAllAsCompleted}
              onMarkAllAsIncomplete={handleMarkAllAsIncomplete}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Container;
