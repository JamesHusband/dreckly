'use client';
import { useEffect, useCallback } from 'react';
import React, { useState } from 'react';
import { notFound } from 'next/navigation';
import { Restaurant } from '@dreckly/shared-types';
import {
  RestaurantHeader,
  MinimumOrderNotice,
  MenuSection,
  OrderSidebar,
} from '@dreckly/features-restaurants';
import { BackToRestaurants, Status } from '@dreckly/shared-ui-kit';
import { useCartStore, useRestaurantStore } from '@dreckly/state';
import { getCartSubtotal } from '@dreckly/features-cart';

interface RestaurantPageProps {
  params: Promise<{ id: string }>;
}

const RestaurantPage = ({ params }: RestaurantPageProps) => {
  const { id } = React.use(params);
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [loading, setLoading] = useState(true);

  const { cartItems, addItem, removeItem } = useCartStore();
  const { setSelectedRestaurant } = useRestaurantStore();

  useEffect(() => {
    fetch(`http://localhost:3000/api/restaurants/${id}`, { cache: 'no-store' })
      .then((response) => {
        if (!response.ok) return null;
        return response.json();
      })
      .then((data) => setRestaurant(data))
      .finally(() => setLoading(false));
  }, [id]);

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

  const removeFromCart = useCallback(
    (itemId: string) => {
      removeItem(itemId);
    },
    [removeItem]
  );

  if (loading) {
    return <Status type="loading" message="Loading restaurant..." />;
  }

  if (!restaurant) {
    notFound();
  }

  const cart = cartItems.reduce((acc, item) => {
    acc[item.id] = item.quantity;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="min-h-screen bg-white">
      <BackToRestaurants />
      <RestaurantHeader
        name={restaurant.name}
        description={restaurant.description}
        rating={restaurant.rating}
        reviewCount={restaurant.reviewCount}
        deliveryTime={restaurant.deliveryTime}
        deliveryFee={restaurant.deliveryFee}
        address={restaurant.address}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <MinimumOrderNotice minOrder={restaurant.minimumOrder} />

            {restaurant.menu.map((category, categoryIndex) => (
              <MenuSection
                key={categoryIndex}
                restaurantName={restaurant.name}
                categoryName={category.name}
                items={category.items}
                cart={cart}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            ))}
          </div>

          <div className="lg:col-span-1">
            <OrderSidebar
              name={restaurant.name}
              cart={cart}
              menuCategories={restaurant.menu}
              removeFromCart={removeFromCart}
              addToCart={addToCart}
              deliveryFee={restaurant.deliveryFee}
              minOrder={restaurant.minimumOrder}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantPage;
