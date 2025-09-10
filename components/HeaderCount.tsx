"use client";
import useItemStore from "@/stores/useItemStore";

const HeaderCount = () => {
  const totalItems = useItemStore((state) => state.items.length);
  const totalCompletedItems = useItemStore(
    (state) => state.items.filter((item) => item.completed).length
  );
  return (
    <>
      <h1 className="text-xl font-bold text-black text-end pt-4 pr-12">
        {totalCompletedItems}/{totalItems} Items packed
      </h1>
    </>
  );
};

export default HeaderCount;
