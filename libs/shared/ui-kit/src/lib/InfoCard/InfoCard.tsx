import { ReactNode } from 'react';

interface InfoCardProps {
  children: ReactNode;
  variant?: 'success' | 'warning' | 'info';
  className?: string;
}

export const InfoCard = ({ 
  children, 
  variant = 'info',
  className = '' 
}: InfoCardProps) => {
  const baseClasses = 'p-4 rounded-lg';
  
  const variantClasses = {
    success: 'bg-green-50 text-green-700',
    warning: 'bg-yellow-50 text-yellow-700',
    info: 'bg-blue-50 text-blue-700',
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <div className={combinedClasses}>
      <div className="flex items-center gap-2">
        {children}
      </div>
    </div>
  );
}; 