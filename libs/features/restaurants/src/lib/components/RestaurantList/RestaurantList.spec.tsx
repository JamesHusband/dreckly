import { render, screen } from '@testing-library/react';
import { RestaurantList } from './RestaurantList';
import { Restaurant } from '@dreckly/shared-types';

jest.mock('./RestaurantCard', () => ({
  RestaurantCard: ({ name }: { name: string }) => (
    <div>Restaurant Card: {name}</div>
  ),
}));

describe('RestaurantList', () => {
  const mockRestaurants: Restaurant[] = [
    {
      id: 1,
      name: 'Test Restaurant 1',
      cuisine: 'Italian',
      rating: 4.5,
      deliveryTime: '20-30 min',
      deliveryFee: 2.5,
      minimumOrder: 10,
      featured: true,
      address: '123 Test St',
      description: 'Test description',
      reviewCount: 100,
      menu: [],
    },
    {
      id: 2,
      name: 'Test Restaurant 2',
      cuisine: 'Chinese',
      rating: 4.2,
      deliveryTime: '25-35 min',
      deliveryFee: 3.0,
      minimumOrder: 15,
      featured: false,
      address: '456 Test Ave',
      description: 'Test description 2',
      reviewCount: 80,
      menu: [],
    },
  ];

  it('should render restaurant list with heading', () => {
    render(<RestaurantList restaurants={mockRestaurants} />);

    expect(screen.getByText('All restaurants')).toBeInTheDocument();
  });

  it('should render all restaurant cards', () => {
    render(<RestaurantList restaurants={mockRestaurants} />);

    expect(
      screen.getByText('Restaurant Card: Test Restaurant 1')
    ).toBeInTheDocument();
    expect(
      screen.getByText('Restaurant Card: Test Restaurant 2')
    ).toBeInTheDocument();
  });

  it('should render empty state when no restaurants', () => {
    render(<RestaurantList restaurants={[]} />);

    expect(screen.getByText('All restaurants')).toBeInTheDocument();
    expect(screen.queryByText(/Restaurant Card:/)).not.toBeInTheDocument();
  });
});
