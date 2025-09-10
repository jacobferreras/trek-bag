"use client";
import { useState, useMemo } from "react";
import useItemStore from "@/stores/useItemStore";

export const useSortItems = () => {
  const items = useItemStore((state) => state.items);
  const handleToggleItems = useItemStore((state) => state.toggleItem);
  const onDeleteItem = useItemStore((state) => state.deleteItem);
  const [sortBy, setSortBy] = useState<"all" | "packed" | "unpacked">("all");

  const sortItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (sortBy === "packed") {
          return Number(b.completed) - Number(a.completed);
        }
        if (sortBy === "unpacked") {
          return Number(a.completed) - Number(b.completed);
        }
        return 0;
      }),
    [items, sortBy]
  );

  return {
    sortItems,
    setSortBy,
    handleToggleItems,
    onDeleteItem,
  };
};
