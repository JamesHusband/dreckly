import { render, screen } from '@testing-library/react';
import { CartMain } from './CartMain';
import { CartItemType } from '@dreckly/shared-types';

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
    render(
      <CartMain
        cartItems={[
          {
            id: '1',
            restaurantId: '1',
            restaurantName: 'Test Restaurant',
            name: 'Test Item',
            price: 10,
            quantity: 1,
            image: '/test.jpg',
          } as CartItemType,
        ]}
        userDeliveryAddress="123 Main St"
        updateQuantity={() => jest.fn()}
        removeItem={() => jest.fn()}
      />
    );
    expect(screen.getByText('Cart Header')).toBeInTheDocument();
    expect(screen.getByText('Customer Address')).toBeInTheDocument();
    expect(screen.getByText('Cart Item')).toBeInTheDocument();
  });
});
