import { useRef, useState } from "react";
import { Items } from "../types/items";

export const useItems = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [items, setItems] = useState<Items[]>([]);
  const [text, setText] = useState("");
  const [totalItems, setTotalItems] = useState(0);

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
    setTotalItems((prev) => prev + 1);
    setText("");
    inputRef.current?.focus();
  };

  const handleDeleteItems = (id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    setTotalItems((prev) => prev - 1);
  };

  const handleRemoveAllItems = () => {
    setItems([]);
    setTotalItems(0);
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

  const totalCompletedItems = items.filter((item) => item.completed).length;

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
