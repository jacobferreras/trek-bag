import { useRef, useState } from "react";
import { Items } from "../types/items";

export const useItems = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [items, setItems] = useState<Items[]>([]);
  const totalItems = items.length;
  const totalCompletedItems = items.filter((item) => item.completed).length;
  const [text, setText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setText(e.target.value);
  };

  const handleCompletedItems = (id: number) => {
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
      id: Math.floor(Math.random() * 1000),
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
    text,
    items,
    totalItems,
    totalCompletedItems,
    handleChange,
    handleAddItem,
    handleCompletedItems,
    handleDeleteItems,
    handleRemoveAllItems,
    handleMarkAllAsCompleted,
    handleMarkAllAsIncomplete,
  };
};
