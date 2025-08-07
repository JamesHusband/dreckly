import { render, screen } from '@testing-library/react';
import { CartMain } from './CartMain';

jest.mock('@dreckly/state', () => ({
  useCartStore: () => ({
    cartItems: [
      {
        id: '1',
        restaurantId: '1',
        restaurantName: 'Test Restaurant',
        name: 'Test Item',
        price: 10,
        quantity: 1,
        image: '/test.jpg',
      },
    ],
  }),
}));

jest.mock('../../hooks', () => ({
  useUpdateQuantity: () => ({ updateQuantity: jest.fn() }),
  useRemoveFromCart: () => ({ removeFromCart: jest.fn() }),
}));

jest.mock('../CartHeader', () => ({
  CartHeader: () => <div>Cart Header</div>,
}));

jest.mock('../CartItem', () => ({
  CartItem: () => <div>Cart Item</div>,
}));

jest.mock('../CustomerAddress', () => ({
  CustomerAddress: () => <div>Customer Address</div>,
}));

jest.mock('@dreckly/shared-ui-kit', () => ({
  FoodIcon: () => <div>Food Icon</div>,
  ItemCounter: () => <div>Item Counter</div>,
}));

describe('CartMain', () => {
  it('should render', () => {
    render(<CartMain />);
    expect(screen.getByText('Cart Header')).toBeInTheDocument();
    expect(screen.getByText('Customer Address')).toBeInTheDocument();
    expect(screen.getByText('Cart Item')).toBeInTheDocument();
  });
});
