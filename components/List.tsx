import React from "react";
import { ImCross } from "react-icons/im";
interface ListProps {
  item: string;
  isCompleted: boolean;
  handleToggleItems: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDeleteItem?: () => void;
}

const List = ({
  item,
  isCompleted,
  handleToggleItems,
  onDeleteItem,
}: ListProps) => {
  return (
    <>
      <ul className="list bg-base-white rounded-box shadow-md text-black w-100">
        <li className="list-row w-full flex flex-row justify-between items-center p-4">
          <div className="flex flex-row gap-4 items-center">
            <input
              type="checkbox"
              checked={isCompleted}
              className="checkbox checkbox-neutral"
              onChange={handleToggleItems}
            />

            <h1 className="text-lg font-bold">{item}</h1>
          </div>
          <div>
            <button className="btn btn-square btn-ghost" onClick={onDeleteItem}>
              <ImCross />
            </button>
          </div>
        </li>
      </ul>
    </>
  );
};

export default List;
