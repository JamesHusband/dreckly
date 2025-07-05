'use client';

import React, { useState } from 'react';
import { notFound } from 'next/navigation';
import {
  RestaurantHeader,
  MinimumOrderNotice,
  MenuSection,
  BackToRestaurants,
  OrderSidebar,
} from '@dreckly/features-restaurants';

interface RestaurantPageProps {
  params: Promise<{ id: string }>;
}

const RestaurantPage = ({ params }: RestaurantPageProps) => {
  const { id } = React.use(params);
  const [cart, setCart] = useState<{ [key: string]: number }>({});

  const restaurantId = Number.parseInt(id);
  if (isNaN(restaurantId)) {
    notFound();
  }

  const restaurant =
    restaurantId === 1
      ? {
          id: id,
          name: 'The Cornish Pasty Co.',
          cuisine: 'Traditional Cornish',
          rating: 4.8,
          reviewCount: 324,
          deliveryTime: '25-40 min',
          deliveryFee: '£2.99',
          minOrder: '£15.00',
          address: '12 High Street, Truro, Cornwall TR1 2AB',
          description:
            'Authentic Cornish pasties made with locally sourced ingredients. Family recipe passed down through generations.',
        }
      : null;

  if (!restaurant) {
    notFound();
  }

  const menuCategories = [
    {
      name: 'Traditional Pasties',
      items: [
        {
          id: '1',
          name: 'Traditional Pasty',
          description: 'Traditional beef, potato, swede and onion pasty',
          price: 4.5,
        },
        {
          id: '2',
          name: 'Cheese & Onion Pasty',
          description:
            'Vegetarian pasty with mature cheddar and caramelized onions',
          price: 4.25,
        },
        {
          id: '3',
          name: 'Steak Pasty',
          description: 'Premium steak and kidney with rich gravy',
          price: 5.25,
        },
      ],
    },
    {
      name: 'Specialty Pasties',
      items: [
        {
          id: '4',
          name: 'Chicken & Mushroom Pasty',
          description: 'Free-range chicken with wild mushrooms and herbs',
          price: 4.75,
        },
        {
          id: '5',
          name: 'Fish Pasty',
          description: 'Fresh Cornish fish with parsley sauce',
          price: 5.5,
        },
      ],
    },
    {
      name: 'Sides & Drinks',
      items: [
        {
          id: '6',
          name: 'Cornish Yarg Cheese',
          description: 'Local artisan cheese portion',
          price: 3.25,
        },
        {
          id: '7',
          name: 'Cornish Cider',
          description: 'Traditional scrumpy cider 500ml',
          price: 4.5,
        },
      ],
    },
  ];

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
    menuCategories.forEach((category) => {
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
            <MinimumOrderNotice minOrder={restaurant.minOrder} />

            {menuCategories.map((category, categoryIndex) => (
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
              menuCategories={menuCategories}
              removeFromCart={removeFromCart}
              addToCart={addToCart}
              getCartTotal={getCartTotal}
              deliveryFee={restaurant.deliveryFee}
              minOrder={restaurant.minOrder}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantPage;
