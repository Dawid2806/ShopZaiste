import Link from "next/link";
import { Rating } from "./Rating";

interface ProductsDetails {
  id: number;
  title?: string;
  description: string;
  thumbailUrl: string;
  thumbailAlt: string;
  rating: number;
}
interface ProductDetailsProps {
  data: ProductsDetails;
}

export const ProductDetails = ({ data }: ProductDetailsProps) => {
  return (
    <>
      <picture>
        <img className="" src={data.thumbailUrl} alt={data.thumbailAlt} />
      </picture>
      <div>
        <h2 className="text-center mt-4">{data.title}</h2>
        <p className="p-4"> {data.description}</p>
        <Rating rating={data.rating} />
      </div>
    </>
  );
};
type ProductListItem = Pick<
  ProductsDetails,
  "title" | "thumbailAlt" | "thumbailUrl" | "id"
>;

interface ProductListItemProps {
  data: ProductListItem;
}

export const ProductListItem = ({ data }: ProductListItemProps) => {
  return (
    <>
      <picture>
        <img className="" src={data.thumbailUrl} alt={data.thumbailAlt} />
      </picture>
      <div>
        <Link href={`/products/${data.id}`}>
          <a>
            <h2 className="text-center mt-4">{data.title}</h2>
          </a>
        </Link>
      </div>
    </>
  );
};
