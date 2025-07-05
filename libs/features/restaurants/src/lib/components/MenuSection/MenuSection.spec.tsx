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
        items={[]}
        cart={{}}
        addToCart={() => jest.fn()}
        removeFromCart={() => jest.fn()}
      />
    );
    expect(screen.getByText('Menu Section')).toBeInTheDocument();
  });
});
