interface CuisineCardProps {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const CuisineCard = ({ name, icon }: CuisineCardProps) => {
  const IconComponent = icon;
  return (
    <button
      key={name}
      className="bg-white hover:shadow-md transition-shadow cursor-pointer text-center p-4 h-24 flex flex-col items-center justify-center rounded-lg border"
    >
      <IconComponent className="w-8 h-8 mb-2" />
      <p className="text-sm font-medium leading-tight">{name}</p>
    </button>
  );
};
