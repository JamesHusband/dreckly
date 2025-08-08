interface PriceRowProps {
  label: string;
  amount: number;
  isTotal?: boolean;
}

export const PriceRow = ({ label, amount, isTotal = false }: PriceRowProps) => {
  return (
    <div
      className={`flex justify-between ${isTotal ? 'font-bold text-lg' : ''}`}
    >
      <span>{label}</span>
      <span>£{amount.toFixed(2)}</span>
    </div>
  );
};
