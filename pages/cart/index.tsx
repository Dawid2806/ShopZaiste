import { it } from "node:test";
import React from "react";
import { CartList } from "../../components/Cart/CartList";
import { useCartState } from "../../hooks/useContext";

const CartPage = () => {
  const cartState = useCartState();
  return <CartList />;
};

export default CartPage;
