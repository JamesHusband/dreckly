import Link from 'next/link';

export const CartHeader = ({
  restaurantName,
  id,
}: {
  restaurantName: string;
  id: string;
}) => {
  return (
    <div className="p-4 border-b border-gray-200">
      <h3 className="text-lg font-semibold">From {restaurantName}</h3>
      <Link
        href={`/restaurant/${id}`}
        className="text-orange-600 hover:text-orange-500 text-sm"
      >
        Add more items
      </Link>
    </div>
  );
};
