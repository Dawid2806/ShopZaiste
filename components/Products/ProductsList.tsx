import Image from "next/image";
import Link from "next/link";
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
  return (
    <>
      <div className="group relative">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md  group-hover:opacity-75 lg:aspect-none ">
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
                  <span aria-hidden="true" className="absolute inset-0" />
                  {data.title}
                </a>
              </Link>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{data.price} zl</p>
          </div>
        </div>
      </div>
    </>
  );
};
