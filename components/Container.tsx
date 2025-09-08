"use client";
import React from "react";
import List from "./List";
import AddFrom from "./AddFrom";
import ButtonsContainer from "./ButtonsContainer";
import { useItems } from "../hooks/useItems";
import FilterButton from "./FilterButton";

const Container = () => {
  const {
    sortItems,
    setSortBy,
    totalCompletedItems,
    text,
    totalItems,
    handleChange,
    handleAddItem,
    handleToggleItems,
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
        <div className="card-body flex flex-row justify-between gap-4 overflow-y-scroll h-[80vh]">
          <div className="flex flex-col gap-4 w-2/3">
            <FilterButton
              onChange={(e) =>
                setSortBy(e.target.value as "all" | "packed" | "unpacked")
              }
            />
            <h1 className="text-xl text-black">Your Items</h1>
            {sortItems.length === 0 && (
              <h1 className="text-lg text-black text-center">No Items</h1>
            )}
            {sortItems.map((item) => (
              <List
                key={item.id}
                item={item.text}
                isCompleted={item.completed}
                handleToggleItems={() => handleToggleItems(item.id)}
                onDeleteItem={() => handleDeleteItems(item.id)}
              />
            ))}
          </div>

          <div className="flex flex-col gap-4 sticky top-0 z-10">
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
