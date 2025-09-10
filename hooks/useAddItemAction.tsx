"use client";
import { useRef } from "react";
import useItemStore from "@/stores/useItemStore";

const useAddItemAction = () => {
  const addItem = useItemStore((state) => state.addItem);
  const text = useItemStore((state) => state.text);
  const textChange = useItemStore((state) => state.textChange);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAddItem = () => {
    if (addItem && text.trim() !== "") {
      addItem(text);
    }
    inputRef.current?.focus();
  };

  return { text, textChange, handleAddItem, inputRef };
};

export default useAddItemAction;
