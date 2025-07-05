import { Logo } from '@dreckly/shared-ui-kit';
import { Navbar } from '../Navbar/';

export const Header = () => {
  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Logo />
          <Navbar />
        </div>
      </div>
    </header>
  );
};
