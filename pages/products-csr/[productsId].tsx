import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useQuery } from "react-query";
import { ProductDetails } from "../../components/Products/Product";
import { StoreApiResponse } from "../../typs";

const getProducts = async (id: string) => {
  if (id === undefined) return;
  const res = await fetch(
    `https://naszsklep-api.vercel.app/api/products/${id}`
  );

  const data: StoreApiResponse = await res.json();
  return data;
};

const ProductIdPage = () => {
  const router = useRouter();
  const productId = router.query.productsId;
  const currentProductId = String(productId);
  const { data, isLoading, isError } = useQuery(
    "products-csr",
    () => {
      return getProducts(currentProductId);
    },
    {
      cacheTime: 2000,
    }
  );
  if (!currentProductId === undefined || Array.isArray(currentProductId)) {
    return <div>Niema takiego produktu</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!data || isError) {
    return <div>cos poszło nie tak</div>;
  }
  return (
    <>
      <Link href={"/products-csr?page=1"}>
        <a>wroc na strone z produktami</a>
      </Link>
      <ProductDetails
        data={{
          id: data.id,
          price: data.price,
          title: data.title,
          thumbailUrl: data.image,
          thumbailAlt: data.title,
          description: data.description,
          rating: data.rating.rate,
        }}
      />
    </>
  );
};
export default ProductIdPage;
