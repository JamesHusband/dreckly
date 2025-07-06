'use client';

import { DropdownMenu, NavButton } from '@dreckly/shared-ui-kit';
import { Menu, ShoppingCart, User } from 'lucide-react';
import { useState } from 'react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItemCount = 3; // Mock cart count for now

  return (
    <nav className="flex items-center space-x-4">
      <NavButton
        variant="cart"
        href="/cart"
        icon={ShoppingCart}
        badgeCount={cartItemCount}
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
          // /* Add mobile menu logic */
        }}
        className="md:hidden"
      >
        Menu
      </NavButton>
    </nav>
  );
};
