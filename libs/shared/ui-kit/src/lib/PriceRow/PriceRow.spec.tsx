import { render, screen } from '@testing-library/react';
import { PriceRow } from './PriceRow';

describe('PriceRow', () => {
  it('should render price row with correct formatting', () => {
    render(<PriceRow label="Subtotal" amount={12.99} />);

    expect(screen.getByText('Subtotal')).toBeInTheDocument();
    expect(screen.getByText('£12.99')).toBeInTheDocument();
  });

  it('should render total row with bold styling', () => {
    render(<PriceRow label="Total" amount={25.5} isTotal />);

    const totalElement = screen.getByText('Total').closest('div');
    expect(totalElement).toHaveClass('font-bold', 'text-lg');
  });

  it('should handle zero amounts', () => {
    render(<PriceRow label="Delivery fee" amount={0} />);

    expect(screen.getByText('£0.00')).toBeInTheDocument();
  });

  it('should handle decimal amounts', () => {
    render(<PriceRow label="Service fee" amount={1.49} />);

    expect(screen.getByText('£1.49')).toBeInTheDocument();
  });
});
