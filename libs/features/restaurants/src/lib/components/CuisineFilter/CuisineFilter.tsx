'use client';

import { CuisineCard, PageHeader } from '@dreckly/shared-ui-kit';
import { Cuisine } from '@dreckly/shared-types';
import { useRestaurantStore } from '@dreckly/state';

import {
  Utensils,
  Fish,
  PieChart,
  Soup,
  Pizza,
  Hamburger,
  Cake,
  Salad,
} from 'lucide-react';

const cuisineIcons: Record<Cuisine['icon'], React.ElementType> = {
  PieChart,
  Fish,
  Utensils,
  Soup,
  Pizza,
  Hamburger,
  Cake,
  Salad,
};

export const CuisineFilter = ({ cuisines }: { cuisines: Cuisine[] }) => {
  const { selectedCuisine, filterByCuisine, clearFilters } = useRestaurantStore();

  const handleCuisineClick = (cuisineName: string) => {
    if (selectedCuisine === cuisineName) {
      clearFilters();
    } else {
      filterByCuisine(cuisineName);
    }
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <PageHeader 
            title="What are you craving?" 
            size="medium" 
            centered 
          />
        </div>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4 max-w-4xl mx-auto">
          {cuisines.map((cuisine) => {
            const Icon = cuisineIcons[cuisine.icon];
            return (
              <CuisineCard
                key={cuisine.name}
                name={cuisine.name}
                icon={cuisine.icon}
                iconComponent={Icon}
                onClick={() => handleCuisineClick(cuisine.name)}
                isSelected={selectedCuisine === cuisine.name}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}; 