import { createContext, ReactNode, useEffect, useState } from "react";
import {
  getCartItemsFromLocalStorage,
  setCartFromLocalStorage,
} from "./CartModal";
export interface CartItem {
  readonly id: string;
  readonly price: number;
  readonly title: string;
  readonly count: number;
}

interface CartState {
  readonly items: readonly CartItem[];
  readonly addItemToCart: (item: CartItem) => void;
  readonly removeItemFromCart: (id: CartItem["id"]) => void;
}

export const cartStateContext = createContext<CartState | null>(null);
export const CartStateContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const updateCart = (item: CartItem) => {
    addItemToCart(item);
    addCartItemToLocalStorage(item);
  };

  const addItemToCart = (item: CartItem) => {
    setCartItems((prevState) => {
      const existingItem = prevState.find(
        (existingItem) => existingItem.id === item.id
      );
      if (!existingItem) {
        return [...prevState, item];
      }
      return prevState.map((existingItem) => {
        if (existingItem.id === item.id) {
          return {
            ...existingItem,
            count: existingItem.count + 1,
          };
        }
        return existingItem;
      });
    });
  };

  const addCartItemToLocalStorage = (item: CartItem) => {
    const cart = getCartItemsFromLocalStorage();
    setCartFromLocalStorage([...cart, item]);
  };

  useEffect(() => {
    setCartItems(getCartItemsFromLocalStorage());
  }, []);

  return (
    <cartStateContext.Provider
      value={{
        items: cartItems,
        addItemToCart: updateCart,
        removeItemFromCart: (id) => {
          setCartItems((prevState) => {
            const exisitingItem = prevState.find((elItem) => {
              return elItem.id === id;
            });
            if (exisitingItem && exisitingItem.count <= 1) {
              return prevState.filter((elItem) => {
                return elItem.id != id;
              });
            }
            return prevState.map((elItem) => {
              if (elItem.id === id) {
                return {
                  ...elItem,
                  count: elItem.count - 1,
                };
              }
              return elItem;
            });
          });
        },
      }}
    >
      {children}
    </cartStateContext.Provider>
  );
};
