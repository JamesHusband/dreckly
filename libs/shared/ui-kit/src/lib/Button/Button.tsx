interface ButtonProps {
  value: string;
  variant: 'primary' | 'secondary' | 'outline';
  onClick: () => void;
  disabled?: boolean;
}

export const Button = ({
  value,
  variant,
  onClick,
  disabled = false,
}: ButtonProps) => {
  const variantClasses = {
    primary: 'bg-orange-500 hover:bg-orange-600 text-white',
    secondary: 'bg-gray-500 hover:bg-gray-600 text-white',
    outline:
      'bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-orange-50',
  };

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';
  const combinedClasses = `w-full text-lg py-6 rounded-md font-medium transition-colors ${variantClasses[variant]} ${disabledClasses}`;

  return (
    <button className={combinedClasses} onClick={onClick} disabled={disabled}>
      {value}
    </button>
  );
};
