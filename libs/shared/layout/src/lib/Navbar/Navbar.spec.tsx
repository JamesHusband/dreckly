import { render } from '@testing-library/react';
import { Navbar } from '.';
import { NavButton, DropdownMenu, Logo } from '@dreckly/shared-ui-kit';
jest.mock('@dreckly/shared-ui-kit', () => ({
  NavButton: () => <div>NavButton</div>,
  DropdownMenu: () => <div>DropdownMenu</div>,
  Logo: () => <div>Logo</div>,
}));

describe('Navbar', () => {
  it('should render', () => {
    render(<Navbar />);
  });
  it('should render NavButton', () => {
    render(
      <NavButton
        variant="button"
        icon={() => <div>Icon</div>}
        onClick={() => jest.fn()}
      />
    );
  });
  it('should render DropdownMenu', () => {
    render(<DropdownMenu setIsMenuOpen={() => jest.fn()} />);
  });
  it('should render Logo', () => {
    render(<Logo />);
  });
});
