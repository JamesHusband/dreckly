import { render, screen } from '@testing-library/react';
import { RestaurantHeader } from '.';

describe('RestaurantHeader', () => {
  it('should render the restaurant header', () => {
    render(
      <RestaurantHeader
        name="Test Restaurant"
        description="Test Description"
        rating={4.5}
        reviewCount={100}
        deliveryTime="10-20 minutes"
        deliveryFee="£5"
        address="123 Test Street, Test City"
      />
    );
    expect(screen.getByText('Test Restaurant')).toBeInTheDocument();
  });
});
