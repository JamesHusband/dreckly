import React from 'react';

interface StatusProps {
  type: 'loading' | 'error';
  message: string;
}

export const Status: React.FC<StatusProps> = ({ type, message }) => {
  const displayMessage = type === 'loading' ? message : `Error: ${message}`;
  const errorColour = type === 'error' ? 'text-red-600' : '';

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className={`text-lg ${errorColour}`}>{displayMessage}</div>
    </div>
  );
};
