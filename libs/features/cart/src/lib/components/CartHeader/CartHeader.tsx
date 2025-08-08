import Link from 'next/link';
import { SectionHeader } from '@dreckly/shared-ui-kit';

export const CartHeader = ({
  restaurantName,
  id,
}: {
  restaurantName: string;
  id: string;
}) => {
  return (
    <SectionHeader 
      title={`From ${restaurantName}`}
      action={
        <Link
          href={`/restaurant/${id}`}
          className="text-orange-600 hover:text-orange-500 text-sm"
        >
          Add more items
        </Link>
      }
    />
  );
};
