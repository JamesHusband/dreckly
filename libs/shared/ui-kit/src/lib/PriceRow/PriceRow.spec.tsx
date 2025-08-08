import { render, screen } from '@testing-library/react';
import { PriceRow } from './PriceRow';

describe('PriceRow', () => {
  it('should render with label and amount', () => {
    render(<PriceRow label="Subtotal" amount={10.5} />);

    expect(screen.getByText('Subtotal')).toBeInTheDocument();
    expect(screen.getByText('£10.50')).toBeInTheDocument();
  });

  it('should render with default styling', () => {
    render(<PriceRow label="Subtotal" amount={10.5} />);

    const container = screen.getByText('Subtotal').parentElement;
    expect(container).toHaveClass('flex', 'justify-between');
  });

  it('should render with total styling when isTotal is true', () => {
    render(<PriceRow label="Total" amount={25.99} isTotal />);

    const container = screen.getByText('Total').parentElement;
    expect(container).toHaveClass(
      'flex',
      'justify-between',
      'font-bold',
      'text-lg'
    );
  });

  it('should format amount to 2 decimal places', () => {
    render(<PriceRow label="Price" amount={5} />);

    expect(screen.getByText('£5.00')).toBeInTheDocument();
  });

  it('should handle zero amount', () => {
    render(<PriceRow label="Free" amount={0} />);

    expect(screen.getByText('£0.00')).toBeInTheDocument();
  });

  it('should handle large amounts', () => {
    render(<PriceRow label="Total" amount={1234.56} />);

    expect(screen.getByText('£1234.56')).toBeInTheDocument();
  });
});
