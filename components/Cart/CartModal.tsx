import { CartItem } from "./CartContext";

export const getCartItemsFromLocalStorage = (): CartItem[] => {
  const itemFromLocalStorage = localStorage.getItem("ZAISTE_SHOPPING_CART");
  if (!itemFromLocalStorage) {
    return [];
  }
  try {
    const items = JSON.parse(itemFromLocalStorage);
    return items;
  } catch (err) {
    console.error(err);
    return [];
  }
};
export const setCartFromLocalStorage = (cartItems: CartItem[]) => {
  localStorage.setItem("ZAISTE_SHOPPING_CART", JSON.stringify(cartItems));
};
