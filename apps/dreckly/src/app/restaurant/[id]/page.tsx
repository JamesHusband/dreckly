'use client';
import { useEffect } from 'react';
import React, { useState } from 'react';
import { notFound } from 'next/navigation';
import { Restaurant } from '@dreckly/shared-types';
import {
  RestaurantHeader,
  MinimumOrderNotice,
  MenuSection,
  OrderSidebar,
} from '@dreckly/features-restaurants';
import { BackToRestaurants } from '@dreckly/shared-ui-kit';

interface RestaurantPageProps {
  params: Promise<{ id: string }>;
}

const RestaurantPage = ({ params }: RestaurantPageProps) => {
  const { id } = React.use(params);
  const [cart, setCart] = useState<{ [key: string]: number }>({});
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setRestaurant(null);

    fetch(`http://localhost:3000/api/restaurants/${id}`, { cache: 'no-store' })
      .then((response) => {
        if (!response.ok) return null;
        return response.json();
      })
      .then((data) => setRestaurant(data))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!restaurant) notFound();

  const addToCart = (itemId: string) => {
    setCart((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  const removeFromCart = (itemId: string) => {
    setCart((prev) => ({
      ...prev,
      [itemId]: Math.max((prev[itemId] || 0) - 1, 0),
    }));
  };

  const getCartTotal = () => {
    let total = 0;
    restaurant.menu.forEach((category) => {
      category.items.forEach((item) => {
        total += (cart[item.id] || 0) * item.price;
      });
    });
    return total;
  };

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
              getCartTotal={getCartTotal}
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
