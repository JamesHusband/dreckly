import { render, screen, fireEvent } from '@testing-library/react';
import { NavButton } from './NavButton';
import { Home } from 'lucide-react';

describe('NavButton', () => {
  it('should render button variant', () => {
    const handleClick = jest.fn();
    render(
      <NavButton variant="button" icon={Home} onClick={handleClick}>
        Home
      </NavButton>
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should render link variant', () => {
    render(
      <NavButton variant="link" icon={Home} href="/home">
        Home
      </NavButton>
    );

    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/home');
  });

  it('should render cart variant with badge', () => {
    render(
      <NavButton variant="cart" icon={Home} href="/cart" badgeCount={3}>
        Cart
      </NavButton>
    );

    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/cart');
  });

  it('should render cart variant without badge when count is 0', () => {
    render(
      <NavButton variant="cart" icon={Home} href="/cart" badgeCount={0}>
        Cart
      </NavButton>
    );

    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByText('Cart')).toBeInTheDocument();
  });

  it('should call onClick for button variant', () => {
    const handleClick = jest.fn();
    render(
      <NavButton variant="button" icon={Home} onClick={handleClick}>
        Home
      </NavButton>
    );

    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should call onClick for link variant', () => {
    const handleClick = jest.fn();
    render(
      <NavButton variant="link" icon={Home} href="/home" onClick={handleClick}>
        Home
      </NavButton>
    );

    fireEvent.click(screen.getByRole('link'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should render with active state for button variant', () => {
    const handleClick = jest.fn();
    render(
      <NavButton variant="button" icon={Home} onClick={handleClick} isActive>
        Home
      </NavButton>
    );

    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-gray-100');
  });

  it('should render without children', () => {
    render(<NavButton variant="button" icon={Home} onClick={jest.fn()} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should render with custom className', () => {
    render(
      <NavButton
        variant="button"
        icon={Home}
        onClick={jest.fn()}
        className="custom-class"
      >
        Home
      </NavButton>
    );

    const button = screen.getByRole('button');
    expect(button).toHaveClass('custom-class');
  });
});
