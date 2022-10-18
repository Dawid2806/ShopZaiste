import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { QueryClientProvider } from "react-query";
import { QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const client = new QueryClient();
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={client}>
        <Header />
        <Component {...pageProps} />
        <Footer />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
