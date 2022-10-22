import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import React from "react";
import { Pagination } from "../../components/Pagination/Pagination";
import { ProductListItem } from "../../components/Products/ProductsList";

import { InferGetStaticPaths, StoreApiResponse } from "../../typs";

const ProductsPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const currentPage = router.query.page;
  const nextPageHandler = () => {
    router.push(`?page=${Number(currentPage) + 1}`);
  };
  const prevPageHandler = () => {
    router.push(`/page=${Number(currentPage) - 1}`);
  };
  if (
    !currentPage ||
    Array.isArray(currentPage) ||
    Number(currentPage) > 10 ||
    Number(currentPage) < 1
  ) {
    return <div>nie poprawny url</div>;
  }
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
                      id: `/item/${product.id}`,
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
      <Pagination
        currentPage={currentPage}
        nextPageHandler={nextPageHandler}
        prevPageHandler={prevPageHandler}
      />
    </>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: Array.from({ length: 10 }, (_, page) => ({
      params: {
        page: (page + 1).toString(),
      },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps = async ({
  params,
}: InferGetStaticPaths<typeof getStaticPaths>) => {
  const offset = params?.page;

  const res = await fetch(
    `https://naszsklep-api.vercel.app/api/products?take=25&offset=${offset}`
  );
  const data: StoreApiResponse[] = await res.json();
  if (data instanceof Error) throw data;

  return {
    props: {
      data,
    },
  };
};

export default ProductsPage;
