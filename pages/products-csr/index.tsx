import React, { useState } from "react";
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
  const [selectedPost, setSelectedPost] = useState("");
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
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {data.map((product) => {
          return (
            <li
              onClick={() => setSelectedPost(`${product.id}`)}
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
                link={"/products-csr"}
              />
            </li>
          );
        })}
      </ul>
      <Pagination
        currentPage={currentPage}
        nextPageHandler={nextPageHandler}
        prevPageHandler={prevPageHandler}
      />
    </>
  );
};

export default ProductsCSRPage;
