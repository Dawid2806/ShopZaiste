import React from "react";
import { useQuery } from "react-query";

import { useRouter } from "next/router";
import { ProductListItem } from "../../components/Products/ProductsList";
import { Pagination } from "../../components/Pagination/Pagination";
import { StoreApiResponse } from "../../typs";

const getProducts = async (setNum: string) => {
  if (setNum === undefined) return;
  const res = await fetch(
    `https://naszsklep-api.vercel.app/api/products?take=25&offset=${setNum}`
  );

  const data: StoreApiResponse[] = await res.json();
  return data;
};

const ProductsCSRPage: React.FC = () => {
  const router = useRouter();
  const currentPage = router.query.page;
  const offset = String((Number(currentPage) - 1) * 25);
  const nextPageHandler = () => {
    router.push(`?page=${Number(currentPage) + 1}`);
  };
  const prevPageHandler = () => {
    router.push(`?page=${Number(currentPage) - 1}`);
  };
  const { data, isLoading, isError } = useQuery(
    ["products-csr", offset],
    () => {
      return getProducts(offset);
    },
    {
      cacheTime: 2000,
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!data || isError) {
    return <div>brak danych</div>;
  }
  if (!currentPage || Array.isArray(currentPage)) {
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
                      id: product.id,
                      price: product.price,
                      title: product.title,
                      thumbailUrl: product.image,
                      thumbailAlt: product.title,
                    }}
                    link={"/products-csr"}
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

export default ProductsCSRPage;
