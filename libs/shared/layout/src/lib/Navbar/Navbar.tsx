'use client';

import { DropdownMenu, NavButton } from '@dreckly/shared-ui-kit';
import { Menu, ShoppingCart, User } from 'lucide-react';
import { useState, useMemo } from 'react';
import { useCartStore } from '@dreckly/state';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItems = useCartStore((state) => state.cartItems);

  const cartItemCount = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }, [cartItems]);

  return (
    <nav className="flex items-center space-x-4">
      <NavButton
        variant="cart"
        href="/cart"
        icon={ShoppingCart}
        badgeCount={cartItemCount > 0 ? cartItemCount : undefined}
      />

      <div className="relative">
        <NavButton
          variant="button"
          icon={User}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          isActive={isMenuOpen}
        >
          Account
        </NavButton>

        {isMenuOpen && <DropdownMenu setIsMenuOpen={setIsMenuOpen} />}
      </div>

      <NavButton
        variant="button"
        icon={Menu}
        onClick={() => {
          // /* TODO: Add mobile menu logic */
        }}
        className="md:hidden"
      >
        Menu
      </NavButton>
    </nav>
  );
};
