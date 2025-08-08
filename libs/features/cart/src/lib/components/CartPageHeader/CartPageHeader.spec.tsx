import { render, screen } from '@testing-library/react';
import { CartPageHeader } from './CartPageHeader';

jest.mock('@dreckly/shared-ui-kit', () => ({
  BackToRestaurants: () => <div>Back to Restaurants</div>,
  PageHeader: ({ title }: { title: string }) => <h1>{title}</h1>,
}));

describe('CartPageHeader', () => {
  it('should render', () => {
    render(<CartPageHeader />);
    expect(screen.getByText('Your Order')).toBeInTheDocument();
  });

  it('should render BackToRestaurants', () => {
    render(<CartPageHeader />);
    expect(screen.getByText('Back to Restaurants')).toBeInTheDocument();
  });
});
