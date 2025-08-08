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
  const variantClasses = {
    default: 'shadow-sm',
    elevated: 'shadow-md',
    outlined: 'shadow-none',
  };

  return (
    <div
      data-testid="card"
      className={`bg-white border border-gray-200 rounded-lg ${
        variantClasses[variant]
      } ${sticky ? 'sticky top-24' : ''} ${
        overflow === 'hidden' ? 'overflow-hidden' : ''
      }`}
    >
      {children}
    </div>
  );
};
