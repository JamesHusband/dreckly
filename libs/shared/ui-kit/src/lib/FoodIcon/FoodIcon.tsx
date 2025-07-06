import Image from 'next/image';
import { getRestaurantImage } from '@dreckly/shared-utils';

export const FoodIcon = ({
  restaurantName,
  name,
  width,
  height,
}: {
  restaurantName: string;
  name: string;
  width: number;
  height: number;
}) => {
  return (
    <Image
      src={getRestaurantImage('menu', restaurantName, name)}
      alt={name}
      width={width}
      height={height}
      className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
    />
  );
};
