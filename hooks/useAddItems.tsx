import { useState } from "react";

export const useAddItems = () => {
  const [items, setItems] = useState([
    { id: 1, text: "Soap", isCompleted: false },
  ]);
  const [text, setText] = useState("");
  const [totalItems, setTotalItems] = useState(1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setText(e.target.value);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const newItem = {
      id: Math.floor(Math.random() * 1000),
      text: text,
      isCompleted: false,
    };
    e.preventDefault();
    setItems([...items, newItem]);
    setTotalItems((prev) => prev + 1);
    setText("");
  };

  return {
    text,
    items,
    totalItems,
    handleChange,
    handleClick,
  };
};
