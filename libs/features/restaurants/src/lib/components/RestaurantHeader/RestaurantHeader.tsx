import { Clock, Star, Truck, MapPin } from 'lucide-react';
import Image from 'next/image';
import { getRestaurantImage } from '@dreckly/features-home';

interface RestaurantHeaderProps {
  name: string;
  description: string;
  rating: number;
  reviewCount: number;
  deliveryTime: string;
  deliveryFee: string;
  address: string;
}

export const RestaurantHeader = ({
  name,
  description,
  rating,
  reviewCount,
  deliveryTime,
  deliveryFee,
  address,
}: RestaurantHeaderProps) => (
  <div className="relative">
    <Image
      src={getRestaurantImage('cover', name)}
      alt={name}
      width={800}
      height={300}
      className="w-full h-64 md:h-80 object-cover"
    />
    <div className="absolute inset-0 bg-black bg-opacity-40" />
    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
      <div className="container mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{name}</h1>
        <p className="text-lg opacity-90 mb-4">{description}</p>
        <div className="flex flex-wrap items-center gap-4 text-sm">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{rating}</span>
            <span className="opacity-75">({reviewCount} reviews)</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {deliveryTime}
          </div>
          <div className="flex items-center gap-1">
            <Truck className="h-4 w-4" />
            {deliveryFee} delivery
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            {address}
          </div>
        </div>
      </div>
    </div>
  </div>
);
