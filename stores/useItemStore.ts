import { create } from "zustand";
import { Items } from "@/types/items";

interface ItemState {
  text: string;
  items: Items[];
  removeAllItems: () => void;
  markAllAsCompleted?: () => void;
  markAllAsIncomplete?: () => void;
  deleteItem?: (id: number) => void;
  addItem?: (item: Items) => void;
  toggleItem?: (id: number) => void;
  textChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const useItemStore = create<ItemState>((set) => ({
  text: "",

  items: [],

  removeAllItems: () => {
    set(() => ({ items: [] }));
  },

  markAllAsCompleted: () => {
    set((state) => ({
      items: state.items.map((item) => ({ ...item, completed: true })),
    }));
  },

  markAllAsIncomplete: () => {
    set((state) => ({
      items: state.items.map((item) => ({ ...item, completed: false })),
    }));
  },

  deleteItem: (id: number) => {
    set((state) => ({ items: state.items.filter((item) => item.id !== id) }));
  },

  addItem: (item: Items) => {
    const newItem = {
      id: Date.now(),
      text: item.text,
      completed: false,
    };
    set((state) => ({ items: [...state.items, newItem], text: "" }));
  },

  tooggleItem: (id: number) => {
    set((state) => ({
      items: state.items.map((item) => ({
        ...item,
        completed: item.id === id ? !item.completed : item.completed,
      })),
    }));
  },

  textChange: (e: React.ChangeEvent<HTMLInputElement>) => {
    set(() => ({ text: e.target.value }));
  },
}));

export default useItemStore;
