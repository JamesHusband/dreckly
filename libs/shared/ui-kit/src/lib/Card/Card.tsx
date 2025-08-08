import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined';
  sticky?: boolean;
  overflow?: 'visible' | 'hidden';
}

export const Card = ({
  children,
  variant = 'default',
  sticky = false,
  overflow = 'visible',
}: CardProps) => {
  const baseClasses = 'bg-white border border-gray-200 rounded-lg';

  const variantClasses = {
    default: 'shadow-sm',
    elevated: 'shadow-md',
    outlined: 'shadow-none',
  };

  const stickyClasses = sticky ? 'sticky top-24' : '';
  const overflowClasses = overflow === 'hidden' ? 'overflow-hidden' : '';

  const combinedClasses =
    `${baseClasses} ${variantClasses[variant]} ${stickyClasses} ${overflowClasses}`.trim();

  return (
    <div data-testid="card" className={combinedClasses}>
      {children}
    </div>
  );
};
