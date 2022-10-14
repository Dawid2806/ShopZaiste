interface RatingProps {
  rating: number;
}
export const Rating = ({ rating }: RatingProps) => {
  return <div className="text-blue-500 ml-5">{rating}</div>;
};
