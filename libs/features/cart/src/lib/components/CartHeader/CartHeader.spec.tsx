import { render, screen, fireEvent } from '@testing-library/react';
import { CartHeader } from './CartHeader';

jest.mock('next/link', () => {
  return function MockLink({ children, href, ...props }: any) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  };
});

const mockPush = jest.fn();
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

describe('CartHeader', () => {
  beforeEach(() => {
    mockPush.mockClear();
  });

  it('should render', () => {
    render(<CartHeader restaurantName="Test Restaurant" id="1" />);
    expect(screen.getByText('From Test Restaurant')).toBeInTheDocument();
  });

  it('should handle link click', () => {
    render(<CartHeader restaurantName="Test Restaurant" id="1" />);
    const link = screen.getByRole('link', { name: /add more items/i });

    expect(link).toHaveAttribute('href', '/restaurant/1');
  });
});
