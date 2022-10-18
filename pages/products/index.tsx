import { InferGetServerSidePropsType } from "next";
import React from "react";
import { ProductListItem } from "../../components/Products/ProductsList";

import { StoreApiResponse } from "../../typs";
const ProductsPage = ({
  data,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {data.map((product) => {
        return (
          <li
            key={product.id}
            className="shadow-xl border-2 p-4 m-4 cursor-pointer "
          >
            <ProductListItem
              data={{
                id: product.id,
                title: product.title,
                thumbailUrl: product.image,
                thumbailAlt: product.title,
              }}
              link={"/products"}
            />
          </li>
        );
      })}
    </ul>
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
