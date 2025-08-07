'use client';
import React from 'react';
import { notFound } from 'next/navigation';
import {
  RestaurantHeader,
  MinimumOrderNotice,
  MenuSection,
  OrderSidebar,
} from '@dreckly/features-restaurants';
import { BackToRestaurants, Status } from '@dreckly/shared-ui-kit';
import { useCartStore } from '@dreckly/state';
import { useAddToCart, useRemoveFromCart } from '@dreckly/features-cart';
import { useRestaurant } from '@dreckly/features-restaurants';

interface RestaurantPageProps {
  params: Promise<{ id: string }>;
}

const RestaurantPage = ({ params }: RestaurantPageProps) => {
  const { id } = React.use(params);
  const { restaurant, loading } = useRestaurant(id);

  const { cartItems } = useCartStore();
  const { addToCart } = useAddToCart(restaurant);
  const { removeFromCart } = useRemoveFromCart();

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
