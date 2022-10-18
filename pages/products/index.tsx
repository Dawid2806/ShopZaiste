import { InferGetServerSidePropsType } from "next";
import React from "react";
import { Pagination } from "../../components/Pagination/Pagination";
import { ProductListItem } from "../../components/Products/ProductsList";

import { StoreApiResponse } from "../../typs";
const ProductsPage = ({
  data,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Customers also purchased
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {data.map((product) => {
              return (
                <div
                  key={product.id}
                  className="shadow-xl border-2 p-4 m-4 cursor-pointer "
                >
                  <ProductListItem
                    data={{
                      id: product.id,
                      price: product.price,
                      title: product.title,
                      thumbailUrl: product.image,
                      thumbailAlt: product.title,
                    }}
                    link={"/products"}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* <Pagination
        currentPage={currentPage}
        nextPageHandler={nextPageHandler}
        prevPageHandler={prevPageHandler}
      /> */}
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products/");
  const data: StoreApiResponse[] = await res.json();
  return {
    props: {
      data,
    },
  };
};

export default ProductsPage;
