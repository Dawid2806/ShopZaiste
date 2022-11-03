import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "../graphql/appolloClient";
import { QueryClientProvider } from "react-query";
import { QueryClient } from "react-query";
import { Layout } from "../components/Layout.tsx/Layout";
import { DefaultSeo } from "next-seo";
import SEO from "./../next-seo.config";
import { CartStateContextProvider } from "../components/Cart/CartContext";
const client = new QueryClient();
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <CartStateContextProvider>
        <Layout>
          <DefaultSeo {...SEO} />

          <QueryClientProvider client={client}>
            <Component {...pageProps} />
          </QueryClientProvider>
        </Layout>
      </CartStateContextProvider>
    </ApolloProvider>
  );
}

export default MyApp;
