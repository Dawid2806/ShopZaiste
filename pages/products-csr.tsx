import { InferGetServerSidePropsType } from "next";
import React from "react";
import { useQuery } from "react-query";
import { ProductDetails } from "../components/Product";

const getProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products/");
  const data: StoreApiResponse[] = await res.json();
  return data;
};

const ProductsCSRPage = () => {
  const { data, isLoading, isError } = useQuery("products", getProducts);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!data || isError) {
    return <div>brak danych</div>;
  }
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {data.map((product) => {
        return (
          <li
            key={product.id}
            className="shadow-xl border-2 p-4 m-4 cursor-pointer "
          >
            <ProductDetails
              data={{
                id: product.id,
                title: product.title,
                description: product.description,
                thumbailUrl: product.image,
                thumbailAlt: product.title,
                rating: product.rating.rate,
              }}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ProductsCSRPage;

export interface StoreApiResponse {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
