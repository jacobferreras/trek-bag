"use client";
import { useSortItems } from "@/hooks/useSortItems";
import { ImCross } from "react-icons/im";
import FilterButton from "./FilterButton";

const List = () => {
  const { sortItems, setSortBy, handleToggleItems, onDeleteItem } =
    useSortItems();

  return (
    <>
      <div className="flex flex-col gap-4 w-2/3">
        <FilterButton setSortBy={setSortBy} />
        <h1 className="text-lg text-black font-bold text-center">Items List</h1>
        {sortItems.length === 0 && (
          <h1 className="text-lg text-black text-center">No Items</h1>
        )}
        <ul className="list bg-base-white rounded-box shadow-md text-black w-100">
          {sortItems.map((item) => (
            <li
              key={item.id}
              className="list-row w-full flex flex-row justify-between items-center p-4"
            >
              <div className="flex flex-row gap-4 items-center">
                <input
                  type="checkbox"
                  checked={item.completed}
                  className="checkbox checkbox-neutral"
                  onChange={() => handleToggleItems(item.id)}
                />

                <h1 className="text-lg font-bold">{item.text}</h1>
              </div>
              <div>
                <button
                  className="btn btn-square btn-ghost"
                  onClick={() => onDeleteItem(item.id)}
                >
                  <ImCross />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default List;
