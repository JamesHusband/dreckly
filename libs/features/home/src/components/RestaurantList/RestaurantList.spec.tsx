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
            deliveryFee: 2.99,
            featured: true,
            menu: [],
            description: 'Test Description',
            reviewCount: 100,
            address: 'Test Address',
            minimumOrder: 10,
          },
        ]}
      />
    );
    expect(screen.getByText('All restaurants')).toBeInTheDocument();
    expect(screen.getByText('RestaurantCard')).toBeInTheDocument();
  });
});
