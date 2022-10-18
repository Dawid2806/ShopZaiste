import { FooterBottom } from "./FooterBottom/FooterBottom";
import { FooterTop } from "./FooterTop/FooterTop";

export const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <FooterTop />
          <FooterBottom />
        </div>
      </footer>
    </>
  );
};
