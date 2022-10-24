import Head from "next/head";
import React, { ReactNode } from "react";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

interface LayoutProps {
  children: ReactNode;
}
export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col  h-screen ">
      <Head>
        <title>Sklep</title>
        <meta name="description" content="jakis opis sklepu"></meta>
      </Head>
      <Header />
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  );
};
