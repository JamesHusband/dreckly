import { ReactNode } from 'react';

interface InfoCardProps {
  children: ReactNode;
  variant?: 'success' | 'warning' | 'info';
  className?: string;
}

export const InfoCard = ({
  children,
  variant = 'info',
  className = '',
}: InfoCardProps) => {
  const variantClasses = {
    success: 'bg-green-50 text-green-700',
    warning: 'bg-yellow-50 text-yellow-700',
    info: 'bg-blue-50 text-blue-700',
  };

  return (
    <div className={`p-4 rounded-lg ${variantClasses[variant]} ${className}`}>
      <div className="flex items-center gap-2">{children}</div>
    </div>
  );
};
