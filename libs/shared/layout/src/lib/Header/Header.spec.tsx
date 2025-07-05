import { render } from '@testing-library/react';
import { Header } from './Header';
import { Navbar } from '../Navbar';
import { Logo } from '@dreckly/shared-ui-kit';

jest.mock('@dreckly/shared-ui-kit', () => ({
  Logo: () => <div>Logo</div>,
}));

jest.mock('../Navbar/Navbar', () => ({
  Navbar: () => <div>Navbar</div>,
}));

describe('Header', () => {
  it('should render', () => {
    render(<Header />);
  });
  it('should render Navbar', () => {
    render(<Navbar />);
  });
  it('should render Logo', () => {
    render(<Logo />);
  });
});
