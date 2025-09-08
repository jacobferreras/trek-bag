"use client";
import { useEffect, useRef, useState, useMemo } from "react";
import { Items } from "../types/items";

export const useItems = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [items, setItems] = useState<Items[]>([]);
  const totalItems = items.length;
  const totalCompletedItems = items.filter((item) => item.completed).length;
  const [text, setText] = useState("");
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

  useEffect(() => {
    if (typeof window !== "undefined") {
      const itemsFromLocalStorage = JSON.parse(
        localStorage.getItem("items") || "[]"
      );
      setItems(itemsFromLocalStorage);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("items", JSON.stringify(items));
    }
  }, [items]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setText(e.target.value);
  };

  const handleToggleItems = (id: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const handleAddItem = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (text === "") {
      inputRef.current?.focus();
      return;
    }

    const newItem = {
      id: Date.now(),
      text: text,
      completed: false,
    };

    e.preventDefault();
    setItems([...items, newItem]);
    setText("");
    inputRef.current?.focus();
  };

  const handleDeleteItems = (id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleRemoveAllItems = () => {
    setItems([]);
  };

  const handleMarkAllAsCompleted = () => {
    setItems((prevItems) =>
      prevItems.map((item) => ({ ...item, completed: true }))
    );
  };

  const handleMarkAllAsIncomplete = () => {
    setItems((prevItems) =>
      prevItems.map((items) => ({ ...items, completed: false }))
    );
  };

  return {
    inputRef,
    sortItems,
    setSortBy,
    text,
    items,
    totalItems,
    totalCompletedItems,
    handleChange,
    handleAddItem,
    handleToggleItems,
    handleDeleteItems,
    handleRemoveAllItems,
    handleMarkAllAsCompleted,
    handleMarkAllAsIncomplete,
  };
};
