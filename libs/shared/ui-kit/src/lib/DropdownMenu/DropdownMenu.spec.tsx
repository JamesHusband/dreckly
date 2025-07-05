import { render } from '@testing-library/react';
import { DropdownMenu } from '.';

describe('DropdownMenu', () => {
  it('should render', () => {
    render(<DropdownMenu setIsMenuOpen={() => jest.fn()} />);
  });
});
