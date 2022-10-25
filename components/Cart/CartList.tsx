import React from "react";
import { useCartState } from "../../hooks/useContext";
import { CartItem } from "./CartItem";

export const CartList = () => {
  const cartState = useCartState();

  return (
    <div className="pointer-events-auto  flex justify-center items-center my-6">
      <div className="flex h-full flex-col lg:grid  overflow-y-scroll bg-white shadow-xl">
        <div className="grid-col-2 overflow-y-auto py-6 px-4 sm:px-6">
          <div className="flex items-start justify-between">
            <h2 className="text-lg font-medium text-gray-900">Shopping cart</h2>
          </div>

          <div className="mt-8">
            <div className="flow-root">
              <ul
                role="list"
                className="-my-6 divide-y lg:grid lg:grid-cols-2 xl:grid-cols-3 divide-gray-200"
              >
                {cartState.items.map((item, index) => {
                  return (
                    <CartItem
                      key={`${item.price}_${item.title}_${index}`}
                      price={item.price}
                      title={item.title}
                      count={item.count}
                      id={item.id}
                    />
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 py-6 px-4 sm:px-6 lg:flex flex-col justify-end">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p></p>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">
            Shipping and taxes calculated at checkout.
          </p>
          <div className="mt-6">
            <a
              href="#"
              className="flex w-6/12 mx-auto justify-center items-center  rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              Checkout
            </a>
          </div>
          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
            <p>
              or
              <button
                type="button"
                className="font-medium  text-indigo-600 hover:text-indigo-500"
              >
                Continue Shopping
                <span aria-hidden="true"> &rarr;</span>
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
