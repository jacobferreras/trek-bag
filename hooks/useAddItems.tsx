import { useState } from "react";

export const useAddItems = () => {
  const [items, setItems] = useState([
    { id: 1, text: "Soap", completed: false },
  ]);
  const [text, setText] = useState("");
  const [totalItems, setTotalItems] = useState(1);

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

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const newItem = {
      id: Math.floor(Math.random() * 1000),
      text: text,
      completed: false,
    };

    if (text === "") return;

    e.preventDefault();
    setItems([...items, newItem]);
    setTotalItems((prev) => prev + 1);
    setText("");
  };

  const totalCompletedItems = items.filter((item) => item.completed).length;

  return {
    text,
    items,
    totalItems,
    totalCompletedItems,
    handleChange,
    handleClick,
    handleCompletedItems,
  };
};
