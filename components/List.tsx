"use client";
import { useSortItems } from "@/hooks/useSortItems";
import { ImCross } from "react-icons/im";

const List = () => {
  const { sortItems, handleToggleItems, onDeleteItem } = useSortItems();

  return (
    <>
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
    </>
  );
};

export default List;
