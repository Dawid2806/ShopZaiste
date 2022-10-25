import Image from "next/image";
import Link from "next/link";
import { useCartState } from "../../hooks/useContext";
import { ProductsDetails } from "../../typs";

type ProductListItem = Pick<
  ProductsDetails,
  "title" | "thumbailAlt" | "thumbailUrl" | "id" | "price"
>;

interface ProductListItemProps {
  data: ProductListItem;
  link: string;
}

export const ProductListItem = ({ data, link }: ProductListItemProps) => {
  const cartState = useCartState();
  return (
    <>
      <div className="group relative">
        <div className="">
          <div className="bg-white p-4">
            <Image
              src={`${data.thumbailUrl}`}
              layout="responsive"
              width={16}
              height={9}
              objectFit="contain"
              alt={data.thumbailAlt}
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <Link href={`${link}${data.id}`}>
                <a>
                  <span aria-hidden="true" className="" />
                  {data.title}
                </a>
              </Link>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{data.price} zl</p>
          </div>
        </div>
        <div className="justify-center flex">
          <button
            onClick={() => {
              cartState.addItemToCart({
                id: String(data.id),
                price: data.price,
                title: data.title,
                count: 1,
              });
            }}
            className="bg-red-500 uppercase p-2 mt-4 shadow-2xl rounded-2xl text-gray-200 hover:bg-cyan-800"
          >
            dodaj do koszyka
          </button>
        </div>
      </div>
    </>
  );
};
