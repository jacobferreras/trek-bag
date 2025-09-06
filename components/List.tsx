import React from "react";
import { ImCross } from "react-icons/im";
interface ListProps {
  item: string;
  isChecked: boolean;
  setIsChecked?: React.Dispatch<React.SetStateAction<boolean>>;
}

const List = ({ item, isChecked, setIsChecked }: ListProps) => {
  return (
    <>
      <ul className="list bg-base-white rounded-box shadow-md text-black w-100">
        <li className="list-row w-full flex flex-row justify-between items-center p-4">
          <div className="flex flex-row gap-4 items-center">
            <input
              type="checkbox"
              value={isChecked ? "checked" : "unchecked"}
              className="checkbox checkbox-neutral"
              onClick={
                setIsChecked ? () => setIsChecked(!isChecked) : undefined
              }
            />

            <h1 className="text-lg">{item}</h1>
          </div>
          <div>
            <button className="btn btn-square btn-ghost">
              <ImCross />
            </button>
          </div>
        </li>
      </ul>
    </>
  );
};

export default List;
