import { InferGetServerSidePropsType } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { ProductDetails } from "../../../components/Products/Product";
import { InferGetStaticPaths, StoreApiResponse } from "../../../typs";

const ProductIdPage = ({
  data,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  const router = useRouter();

  if (!data) {
    return <div>cos poszło nie tak</div>;
  }
  return (
    <>
      <Link href={"/products/1"}>
        <a>wroc na strone z produktami</a>
      </Link>
      <ProductDetails
        data={{
          id: `${data.id}`,
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

export const getStaticPaths = async () => {
  const res = await fetch("https://naszsklep-api.vercel.app/api/products/");
  const data: StoreApiResponse[] = await res.json();

  return {
    paths: data.map((product) => {
      return {
        params: {
          productId: `${product.id}`,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: InferGetStaticPaths<typeof getStaticPaths>) => {
  if (!params?.productId) {
    return {
      props: {},
    };
  }
  const res = await fetch(
    `https://naszsklep-api.vercel.app/api/products/${params?.productId}`
  );
  const data: StoreApiResponse = await res.json();
  return {
    props: {
      data,
    },
  };
};
