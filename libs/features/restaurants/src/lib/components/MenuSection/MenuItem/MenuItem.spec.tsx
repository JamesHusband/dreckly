import { render, screen } from '@testing-library/react';
import { MenuItem } from './MenuItem';

describe('MenuItem', () => {
  it('should render the menu item', () => {
    render(
      <MenuItem
        id="1"
        restaurantName="Test Restaurant"
        name="Test Item"
        description="Test Description"
        price={10}
        cart={{}}
        addToCart={() => jest.fn()}
        removeFromCart={() => jest.fn()}
      />
    );
    expect(screen.getByText('MenuItem')).toBeInTheDocument();
  });
});
