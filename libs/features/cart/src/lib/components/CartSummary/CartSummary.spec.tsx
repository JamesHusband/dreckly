import { render } from '@testing-library/react';
import { CartSummary } from './CartSummary';

describe('CartSummary', () => {
  it('should render', () => {
    render(
      <CartSummary subtotal={10} deliveryFee={1} serviceFee={1} total={12} />
    );
  });
});
