import { useSortItems } from "@/hooks/useSortItems";

interface FilterButtonProps {
  setSortBy: (value: "all" | "packed" | "unpacked") => void;
}

const FilterButton = ({ setSortBy }: FilterButtonProps) => {
  return (
    <>
      <select
        className="select select-bordered w-100 max-w-lg bg-[#ffffff] border-2 border-gray-400 text-black"
        onChange={(e) =>
          setSortBy(e.target.value as "all" | "packed" | "unpacked")
        }
      >
        <option value="all">Sort By Default</option>
        <option value="packed">Sort By Packed</option>
        <option value="unpacked">Sort By Unpacked</option>
      </select>
    </>
  );
};

export default FilterButton;
