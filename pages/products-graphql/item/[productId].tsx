import { InferGetServerSidePropsType } from "next";
import { BackButton } from "../../../components/BackButton/BackButton";
import { ProductDetails } from "../../../components/Products/Product";
import { apolloClient } from "../../../graphql/appolloClient";
import {
  GetProductItemDocument,
  GetProductItemQuery,
  GetProductItemQueryVariables,
  GetProductsSlugsDocument,
  GetProductsSlugsQuery,
} from "../../../src/gql/graphql";
import { InferGetStaticPaths } from "../../../typs";

const ProductIdPage = ({
  data,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  if (!data) {
    return <div>cos poszło nie tak</div>;
  }
  return (
    <>
      <BackButton link="/products-graphql" />

      <ProductDetails
        data={{
          id: data.slug,
          price: data.price,
          title: data.name,
          thumbailUrl: data.images[0].url,
          thumbailAlt: data.name,
          description: data.description,
          longDescription: data.description,
          rating: 0,
        }}
      />
    </>
  );
};
export default ProductIdPage;

export const getStaticPaths = async () => {
  const { data } = await apolloClient.query<GetProductsSlugsQuery>({
    query: GetProductsSlugsDocument,
  });
  return {
    paths: data.products.map((product) => {
      return {
        params: {
          productId: product.slug,
        },
      };
    }),
    fallback: true,
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

  const { data } = await apolloClient.query<
    GetProductItemQuery,
    GetProductItemQueryVariables
  >({
    variables: {
      sluq: params?.productId,
    },
    query: GetProductItemDocument,
  });
  if (!data || !data.product) {
    return {
      props: {},
      notFound: true,
    };
  }

  return {
    props: {
      data: {
        ...data.product,
      },
    },
  };
};
