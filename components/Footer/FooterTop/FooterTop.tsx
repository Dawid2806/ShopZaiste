import React from "react";

export const FooterTop = () => {
  return (
    <div className="lg:flex lg:gap-8">
      <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
        <div className="col-span-2">
          <div>
            <h2 className="text-2xl font-bold text-white">
              Get the latest news!
            </h2>

            <p className="mt-6 text-gray-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse non
              cupiditate quae nam molestias.
            </p>
          </div>
        </div>

        <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end">
          <form className="w-full text-white">
            <label htmlFor="email" className="sr-only">
              {" "}
              Email{" "}
            </label>

            <div className="border border-white/10 p-2 sm:flex sm:items-center">
              <input
                className="h-12 w-full border-none bg-transparent p-3 text-sm font-medium uppercase tracking-widest placeholder-gray-400"
                type="email"
                id="email"
                placeholder="Enter your email"
              />

              <button
                className="mt-1 h-12 w-full bg-red-700 px-6 py-3 text-sm font-bold uppercase tracking-wide sm:ml-4 sm:mt-0 sm:w-auto sm:flex-shrink-0"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
