import { render, screen } from '@testing-library/react';
import { BackToRestaurants } from './BackToRestaurants';

jest.mock('lucide-react', () => ({
  ArrowLeft: () => <span data-testid="arrow-left-icon" />,
}));

describe('BackToRestaurants', () => {
  it('should render the back to restaurants link with correct href, text, and icon', () => {
    render(<BackToRestaurants />);
    const link = screen.getByRole('link', { name: /back to restaurants/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/');
    expect(link).toHaveTextContent('Back to restaurants');
    expect(screen.getByTestId('arrow-left-icon')).toBeInTheDocument();
  });
});
