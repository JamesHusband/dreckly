interface PriceRowProps {
  label: string;
  amount: number;
  isTotal?: boolean;
}

export const PriceRow = ({ label, amount, isTotal = false }: PriceRowProps) => {
  const totalClasses = isTotal ? 'font-bold text-lg' : '';
  const combinedClasses = `flex justify-between ${totalClasses}`;

  return (
    <div className={combinedClasses}>
      <span>{label}</span>
      <span>£{amount.toFixed(2)}</span>
    </div>
  );
};
