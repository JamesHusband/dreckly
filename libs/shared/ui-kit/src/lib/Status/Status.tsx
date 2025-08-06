import React from 'react';

interface StatusProps {
  type: 'loading' | 'error';
  message?: string;
  className?: string;
}

export const Status: React.FC<StatusProps> = ({ 
  type, 
  message, 
  className = '' 
}) => {
  const baseClasses = 'min-h-screen flex items-center justify-center';
  const combinedClasses = `${baseClasses} ${className}`;

  if (type === 'loading') {
    return (
      <div className={combinedClasses}>
        <div className="text-lg">
          {message || 'Loading...'}
        </div>
      </div>
    );
  }

  if (type === 'error') {
    return (
      <div className={combinedClasses}>
        <div className="text-lg text-red-600">
          Error: {message || 'An error occurred'}
        </div>
      </div>
    );
  }

  return null;
}; 