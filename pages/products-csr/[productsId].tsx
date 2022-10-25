import { useRouter } from "next/router";
import React from "react";
import { useQuery } from "react-query";
import { BackButton } from "../../components/BackButton/BackButton";
import { Loading } from "../../components/Loading/Loading";
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
  const { data, isLoading, isError, isFetching } = useQuery(
    "products-csr",
    () => {
      return getProducts(currentProductId);
    },
    {
      cacheTime: 1,
    }
  );
  if (!currentProductId === undefined || Array.isArray(currentProductId)) {
    return <div>Niema takiego produktu</div>;
  }
  if (isLoading || isFetching) {
    return <Loading />;
  }
  if (!data || isError) {
    return <div>cos poszło nie tak</div>;
  }
  console.log(data);
  return (
    <>
      <BackButton link="/products-csr?page=1" />
      <ProductDetails
        data={{
          id: data.id,
          price: data.price,
          title: data.title,
          thumbailUrl: data.image,
          thumbailAlt: data.title,
          description: data.description,
          rating: data.rating.rate,
          longDescription: data.longDescription,
          currentUrl: "/products-csr/",
        }}
      />
    </>
  );
};
export default ProductIdPage;
