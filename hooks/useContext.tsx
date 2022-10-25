import React, { useContext } from "react";
import { cartStateContext } from "../components/Cart/CartContext";

export const useCartState = () => {
  const cartState = useContext(cartStateContext);
  if (!cartState) {
    throw new Error("You forgot CartStateContextProvider");
  }
  return cartState;
};
