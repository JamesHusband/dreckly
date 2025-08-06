import { render, screen } from '@testing-library/react';
import { OrderSidebar } from './OrderSidebar';

describe('OrderSidebar', () => {
  it('should render the order sidebar', () => {
    render(
      <OrderSidebar
        name="Test Restaurant"
        cart={{}}
        menuCategories={[]}
        removeFromCart={() => jest.fn()}
        addToCart={() => jest.fn()}
  
        deliveryFee="1"
        minOrder="1"
      />
    );
    expect(screen.getByText('From Test Restaurant')).toBeInTheDocument();
  });
});
