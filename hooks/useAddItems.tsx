import { useRef, useState } from "react";

export const useAddItems = () => {
  const inputRef = useRef<HTMLInputElement>(null);
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

  const totalCompletedItems = items.filter((item) => item.completed).length;

  return {
    inputRef,
    text,
    items,
    totalItems,
    totalCompletedItems,
    handleChange,
    handleClick,
    handleCompletedItems,
  };
};
