"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  priceLabel: string;
  billing: string;
  quantity: number;
}

interface CartContextValue {
  items: CartItem[];
  itemCount: number;
  cartTotal: number;
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

const STORAGE_KEY = "united-technologies-cart";
const CartContext = createContext<CartContextValue | null>(null);

function isCartItem(item: unknown): item is CartItem {
  return (
    typeof item === "object" &&
    item !== null &&
    "id" in item &&
    "name" in item &&
    "price" in item &&
    "priceLabel" in item &&
    "billing" in item &&
    "quantity" in item &&
    typeof item.id === "string" &&
    typeof item.name === "string" &&
    typeof item.price === "number" &&
    Number.isFinite(item.price) &&
    typeof item.priceLabel === "string" &&
    typeof item.billing === "string" &&
    typeof item.quantity === "number" &&
    Number.isInteger(item.quantity) &&
    item.quantity > 0
  );
}

function readCart(): CartItem[] {
  const savedCart = window.localStorage.getItem(STORAGE_KEY);
  if (!savedCart) return [];

  const parsed: unknown = JSON.parse(savedCart);
  if (!Array.isArray(parsed)) {
    throw new Error("Saved cart data must be an array.");
  }

  if (!parsed.every(isCartItem)) {
    throw new Error("Saved cart contains an invalid item.");
  }

  return parsed;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      setItems(readCart());
    } catch (error) {
      console.error("Could not restore the saved cart:", error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (error) {
      console.error("Could not save the cart:", error);
    }
  }, [items, isLoaded]);

  const addToCart = useCallback((item: Omit<CartItem, "quantity">) => {
    setItems((current) => {
      const existingItem = current.find((currentItem) => currentItem.id === item.id);
      return existingItem
        ? current.map((currentItem) =>
            currentItem.id === item.id
              ? { ...currentItem, quantity: currentItem.quantity + 1 }
              : currentItem
          )
        : [...current, { ...item, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((id: string) => {
    setItems((current) => current.filter((item) => item.id !== id));
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const value = useMemo<CartContextValue>(() => {
    const itemCount = items.reduce((count, item) => count + item.quantity, 0);
    const cartTotal = items.reduce((total, item) => total + item.price * item.quantity, 0);

    return {
      items,
      itemCount,
      cartTotal,
      addToCart,
      removeFromCart,
      clearCart,
    };
  }, [items, addToCart, removeFromCart, clearCart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider.");
  }
  return context;
}
