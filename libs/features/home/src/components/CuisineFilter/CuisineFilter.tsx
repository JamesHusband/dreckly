export const CuisineFilter = ({ cuisineTypes }: { cuisineTypes: any[] }) => (
  <section className="py-12 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold text-center mb-8">
        What are you craving?
      </h2>
      <div className="grid grid-cols-4 md:grid-cols-8 gap-4 max-w-4xl mx-auto">
        {cuisineTypes.map((cuisine) => {
          const IconComponent = cuisine.icon;
          return (
            <button
              key={cuisine.name}
              className="bg-white hover:shadow-md transition-shadow cursor-pointer text-center p-4 h-24 flex flex-col items-center justify-center rounded-lg border"
            >
              <IconComponent className="w-8 h-8 mb-2" />
              <p className="text-sm font-medium leading-tight">
                {cuisine.name}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  </section>
);
