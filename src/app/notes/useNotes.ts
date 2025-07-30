import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { itemSchema, type ItemData } from "./schema";
import { parseNumber } from "@/utils/number";

interface Item {
  id: string;
  name: string;
  quantity: number;
  price: number;
  createdAt: string;
}

const STORAGE_KEY = "notesItems";

export function useNotes() {
  const [items, setItems] = useState<Item[]>([]);
  const [totalValue, setTotalValue] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ItemData>({
    resolver: zodResolver(itemSchema),
    mode: "onChange",
  });

  // Load items from localStorage on component mount
  useEffect(() => {
    const savedItems = localStorage.getItem(STORAGE_KEY);
    if (savedItems) {
      setItems(JSON.parse(savedItems));
    }
  }, []);

  // Calculate total value whenever items change
  useEffect(() => {
    const total = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotalValue(total);
  }, [items]);

  const onSubmit = async (data: ItemData) => {
    const newItem: Item = {
      id: Date.now().toString(),
      name: data.name,
      quantity: data.quantity,
      price: parseNumber(data.price),
      createdAt: new Date().toISOString(),
    };

    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedItems));
    reset();
  };

  const deleteItem = (id: string) => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedItems));
  };

  const clearAllItems = () => {
    setItems([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  return {
    items,
    totalValue,
    register,
    handleSubmit,
    errors,
    isSubmitting,
    onSubmit,
    clearAllItems,
    deleteItem,
  };
}
