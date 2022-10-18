import Link from "next/link";
import { ProductsDetails } from "../../typs";

type ProductListItem = Pick<
  ProductsDetails,
  "title" | "thumbailAlt" | "thumbailUrl" | "id"
>;

interface ProductListItemProps {
  data: ProductListItem;
  link: string;
}

export const ProductListItem = ({ data, link }: ProductListItemProps) => {
  return (
    <>
      <picture>
        <img className="" src={data.thumbailUrl} alt={data.thumbailAlt} />
      </picture>
      <div>
        <Link href={`${link}/${data.id}`}>
          <a>
            <h2 className="text-center mt-4">{data.title}</h2>
          </a>
        </Link>
      </div>
    </>
  );
};
