import { gql } from "@apollo/client";
import { InferGetStaticPropsType } from "next";
import React from "react";
import { ProductListItem } from "../../components/Products/ProductsList";
import { apolloClient } from "../../graphql/appolloClient";
import {
  GetProductsListDocument,
  GetProductsListQuery,
} from "../../src/gql/graphql";

const ProductsPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Customers also purchased
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {data.products.map((product) => {
              return (
                <div key={product.slug} className="shadow-xl border-2 p-4 m-4 ">
                  <ProductListItem
                    data={{
                      id: `/item/${product.slug}`,
                      price: product.price,
                      title: product.name,
                      thumbailUrl: product.images[0].url,
                      thumbailAlt: product.name,
                    }}
                    link={"/products-graphql"}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const { data } = await apolloClient.query<GetProductsListQuery>({
    query: GetProductsListDocument,
  });

  return {
    props: {
      data,
    },
  };
};

export default ProductsPage;
