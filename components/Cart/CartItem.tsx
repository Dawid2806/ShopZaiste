import React from "react";
import { useCartState } from "../../hooks/useContext";

interface CartItemProps {
  id: string;
  title: string;
  price: number;
  count: number;
}

export const CartItem = (props: CartItemProps) => {
  const cartState = useCartState();
  return (
    <li className="flex py-6 lg:mx-12 xl:mx-20">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg"
          alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <a href="#">{}</a>
            </h3>
            <p className="ml-4">
              {props.price}
              {""} zł
            </p>
          </div>
          <p className="mt-1 text-sm text-gray-500">{props.title}</p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-500">Qty {props.count}</p>

          <div className="flex">
            <button
              onClick={() => {
                cartState.removeItemFromCart(props.id);
              }}
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};
