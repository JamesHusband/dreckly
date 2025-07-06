import { render, screen } from '@testing-library/react';
import { RestaurantCard } from './RestaurantCard';

jest.mock('@dreckly/shared-utils', () => ({
  getRestaurantImage: jest
    .fn()
    .mockReturnValue(
      '/images/restaurant/example-restaurant/logo/example-restaurant.webp'
    ),
}));

describe('RestaurantCard', () => {
  it('should render the restaurant card', () => {
    render(
      <RestaurantCard
        id={1}
        name="Example Restaurant"
        featured={true}
        rating={4.5}
        deliveryTime="20-30 min"
        deliveryFee={2.99}
        cuisine="Italian"
      />
    );
    expect(screen.getByText('Example Restaurant')).toBeInTheDocument();
  });
});
