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
        <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
          <img
            src={data.thumbailUrl}
            alt={data.thumbailAlt}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
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
