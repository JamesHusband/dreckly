import { useCallback } from 'react';
import { Restaurant } from '@dreckly/shared-types';
import { useCartStore, useRestaurantStore } from '@dreckly/state';

export const useAddToCart = (restaurant: Restaurant | null) => {
  const { addItem } = useCartStore();
  const { setSelectedRestaurant } = useRestaurantStore();

  const addToCart = useCallback(
    (itemId: string) => {
      if (!restaurant) return;

      const menuItem = restaurant.menu
        .flatMap((category) => category.items)
        .find((item) => item.id === itemId);

      if (menuItem) {
        setSelectedRestaurant(restaurant);

        addItem({
          id: menuItem.id,
          restaurantId: restaurant.id.toString(),
          restaurantName: restaurant.name,
          name: menuItem.name,
          price: menuItem.price,
          image: `/images/restaurant/${restaurant.name
            .toLowerCase()
            .replace(/\s+/g, '-')}/menu/${menuItem.name
            .toLowerCase()
            .replace(/\s+/g, '-')}.webp`,
          deliveryFee: restaurant.deliveryFee,
          minimumOrder: restaurant.minimumOrder,
          quantity: 1,
        });
      }
    },
    [restaurant, addItem, setSelectedRestaurant]
  );

  return { addToCart };
};
