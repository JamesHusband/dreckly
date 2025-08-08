import { Clock, Star, Truck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { getRestaurantImage } from '@dreckly/shared-utils';
import { BaseRestaurant } from '@dreckly/shared-types';

export const RestaurantCard = ({
  id,
  name,
  featured,
  rating,
  deliveryTime,
  deliveryFee,
  cuisine,
}: BaseRestaurant) => {
  return (
    <Link
      key={id}
      href={`/restaurant/${id}`}
      className="bg-white hover:shadow-lg transition-shadow cursor-pointer overflow-hidden rounded-lg border text-left block"
    >
      <div className="relative">
        <Image
          src={getRestaurantImage('logo', name)}
          alt={name}
          width={300}
          height={200}
          className="w-full h-40 object-cover"
        />
        {featured && (
          <span className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 rounded text-sm">
            Featured
          </span>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-base font-semibold">{name}</h3>
            <p className="text-sm text-gray-600">{cuisine}</p>
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>
        <div className="flex items-center gap-4 text-xs text-gray-600 mt-2">
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {deliveryTime}
          </div>
          <div className="flex items-center gap-1">
            <Truck className="h-3 w-3" />
            {deliveryFee}
          </div>
        </div>
      </div>
    </Link>
  );
}; 