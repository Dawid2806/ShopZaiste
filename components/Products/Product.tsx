import Link from "next/link";
import { ProductsDetails } from "../../typs";
import { Rating } from "./Rating";

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
