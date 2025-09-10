import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Items } from "@/types/items";

interface ItemState {
  text: string;
  items: Items[];
  totalItems?: number;
  totalCompletedItems?: number;
  removeAllItems: () => void;
  markAllAsCompleted?: () => void;
  markAllAsIncomplete?: () => void;
  deleteItem: (id: number) => void;
  addItem: (text: string) => void;
  toggleItem: (id: number) => void;
  textChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const useItemStore = create<ItemState>()(
  persist(
    (set) => ({
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
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        }));
      },

      addItem: (text: string) => {
        if (text === "") {
          return;
        }
        const newItem = {
          id: Date.now(),
          text,
          completed: false,
        };
        set((state) => ({
          items: [...state.items, newItem],
          text: "",
        }));
      },

      toggleItem: (id: number) => {
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
    }),
    {
      name: "items",
    }
  )
);

export const selectTotalItems = (state: ItemState) => state.items.length;
export const selectTotalCompletedItems = (state: ItemState) =>
  state.items.filter((item) => item.completed).length;

export default useItemStore;
