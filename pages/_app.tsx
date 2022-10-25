import "../styles/globals.css";
import type { AppProps } from "next/app";

import { QueryClientProvider } from "react-query";
import { QueryClient } from "react-query";
import { Layout } from "../components/Layout.tsx/Layout";
import { DefaultSeo } from "next-seo";
import SEO from "./../next-seo.config";
const client = new QueryClient();
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <DefaultSeo {...SEO} />

      <QueryClientProvider client={client}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </Layout>
  );
}

export default MyApp;
