import { render, screen } from '@testing-library/react';
import { RestaurantList } from './RestaurantList';

jest.mock('./RestaurantCard', () => ({
  RestaurantCard: () => <div>RestaurantCard</div>,
}));

describe('RestaurantList', () => {
  it('should render the restaurant list', () => {
    render(
      <RestaurantList
        restaurants={[
          {
            id: 1,
            name: 'Test Restaurant',
            cuisine: 'Test Cuisine',
            rating: 4.5,
            deliveryTime: '20-30 min',
            deliveryFee: '£2.99',
            featured: true,
          },
        ]}
      />
    );
    expect(screen.getByText('Restaurant List')).toBeInTheDocument();
    expect(screen.getByText('RestaurantCard')).toBeInTheDocument();
  });
});
