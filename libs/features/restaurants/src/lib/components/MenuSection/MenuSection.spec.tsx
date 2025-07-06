import { render, screen } from '@testing-library/react';
import { MenuSection } from './MenuSection';

jest.mock('./MenuItem', () => ({
  MenuItem: () => <div>MenuItem</div>,
}));

describe('MenuSection', () => {
  it('should render the menu section', () => {
    render(
      <MenuSection
        restaurantName="Test Restaurant"
        categoryName="Test Menu"
        items={[
          {
            id: '1',
            name: 'Test Item',
            description: 'Test Description',
            price: 10,
          },
        ]}
        cart={{}}
        addToCart={() => jest.fn()}
        removeFromCart={() => jest.fn()}
      />
    );
    expect(screen.getByText('Test Menu')).toBeInTheDocument();
    expect(screen.getByText('MenuItem')).toBeInTheDocument();
  });
});
