import { render, screen } from '@testing-library/react';
import { FoodIcon } from './FoodIcon';

jest.mock('@dreckly/shared-utils', () => ({
  getRestaurantImage: jest.fn(
    (type, restaurantName, itemName) =>
      `/images/restaurant/${restaurantName
        .toLowerCase()
        .replace(/\s+/g, '-')}/menu/${itemName
        .toLowerCase()
        .replace(/\s+/g, '-')}.webp`
  ),
}));

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, width, height, className }: any) => (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  ),
}));

describe('FoodIcon', () => {
  const defaultProps = {
    restaurantName: 'Test Restaurant',
    name: 'Test Item',
    width: 80,
    height: 80,
  };

  it('should render with correct props', () => {
    render(<FoodIcon {...defaultProps} />);

    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('alt', 'Test Item');
    expect(image).toHaveAttribute('width', '80');
    expect(image).toHaveAttribute('height', '80');
  });

  it('should generate correct image source', () => {
    render(<FoodIcon {...defaultProps} />);

    const image = screen.getByRole('img');
    expect(image).toHaveAttribute(
      'src',
      '/images/restaurant/test-restaurant/menu/test-item.webp'
    );
  });

  it('should handle restaurant names with spaces', () => {
    render(
      <FoodIcon
        {...defaultProps}
        restaurantName="Pizza Place"
        name="Margherita"
      />
    );

    const image = screen.getByRole('img');
    expect(image).toHaveAttribute(
      'src',
      '/images/restaurant/pizza-place/menu/margherita.webp'
    );
  });

  it('should handle item names with spaces', () => {
    render(
      <FoodIcon
        {...defaultProps}
        restaurantName="Burger Joint"
        name="Chicken Burger"
      />
    );

    const image = screen.getByRole('img');
    expect(image).toHaveAttribute(
      'src',
      '/images/restaurant/burger-joint/menu/chicken-burger.webp'
    );
  });

  it('should apply correct CSS classes', () => {
    render(<FoodIcon {...defaultProps} />);

    const image = screen.getByRole('img');
    expect(image).toHaveClass(
      'w-20',
      'h-20',
      'object-cover',
      'rounded-lg',
      'flex-shrink-0'
    );
  });

  it('should handle different dimensions', () => {
    render(<FoodIcon {...defaultProps} width={120} height={90} />);

    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('width', '120');
    expect(image).toHaveAttribute('height', '90');
  });

  it('should handle special characters in names', () => {
    render(
      <FoodIcon
        {...defaultProps}
        restaurantName="Café & Co"
        name="Fish & Chips"
      />
    );

    const image = screen.getByRole('img');
    expect(image).toHaveAttribute(
      'src',
      '/images/restaurant/café-&-co/menu/fish-&-chips.webp'
    );
  });
});
