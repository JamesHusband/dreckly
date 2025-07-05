import { CuisineCard } from '@dreckly/shared-ui-kit';

interface CuisineType {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface CuisineFilterProps {
  cuisineTypes: CuisineType[];
}

export const CuisineFilter = ({ cuisineTypes }: CuisineFilterProps) => (
  <section className="py-12 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold text-center mb-8">
        What are you craving?
      </h2>
      <div className="grid grid-cols-4 md:grid-cols-8 gap-4 max-w-4xl mx-auto">
        {cuisineTypes.map((cuisine) => (
          <CuisineCard
            key={cuisine.name}
            name={cuisine.name}
            icon={cuisine.icon}
          />
        ))}
      </div>
    </div>
  </section>
);
