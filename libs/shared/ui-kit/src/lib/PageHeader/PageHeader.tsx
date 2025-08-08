export interface PageHeaderProps {
  title: string;
  size: 'small' | 'medium' | 'large';
  centered?: boolean;
}

export const PageHeader = ({
  title,
  size,
  centered = false,
}: PageHeaderProps) => {
  const sizeClasses = {
    small: 'text-xl font-bold',
    medium: 'text-2xl font-bold',
    large: 'text-3xl font-bold',
  };

  return (
    <h1 className={`${sizeClasses[size]} ${centered ? 'text-center' : ''}`}>
      {title}
    </h1>
  );
};
