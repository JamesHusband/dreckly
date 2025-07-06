import { CartItemType } from '@dreckly/shared-types';
import { getCartSubtotal } from './getCartSubtotal';

describe('getCartSubtotal', () => {
  it('should return the subtotal of the cart', () => {
    const cartItems = [
      {
        id: '1',
        restaurantId: '1',
        restaurantName: 'Test Restaurant',
        name: 'Test Item',
        price: 10,
        quantity: 2,
        image: 'test.jpg',
      } as CartItemType,
    ];
    expect(getCartSubtotal({ cartItems })).toBe(20);
  });
});
