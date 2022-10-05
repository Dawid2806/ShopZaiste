import Link from "next/link";

export const Header = () => {
  return (
    <header className=" mx-auto w-full">
      <nav className="bg-gray-700 text-white px-4 py-4 ">
        <ul>
          <Link href={"/"}>
            <li>Główna</li>
          </Link>
          <Link href={"/about"}>
            <li>About</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};
