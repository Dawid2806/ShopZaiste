import Link from "next/link";
import { useRouter } from "next/router";

export const Header = () => {
  const router = useRouter();
  return (
    <header className=" mx-auto w-full">
      <nav className="bg-gray-700 text-white px-4 py-4  ">
        <ul className="flex flex-col md:flex-row md:gap-6 ">
          <Link href={"/"}>
            <li className="cursor-pointer">Główna</li>
          </Link>
          <Link href={"/about"}>
            <li className="cursor-pointer">About</li>
          </Link>
          <Link href={"/products/1"}>
            <li className="cursor-pointer">Products</li>
          </Link>
          <Link href={"/products-csr?page=1"}>
            <li className="cursor-pointer">Products-csr</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};
