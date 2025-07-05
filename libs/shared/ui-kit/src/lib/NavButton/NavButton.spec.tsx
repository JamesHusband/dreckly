import { render } from '@testing-library/react';
import { NavButton } from '.';

describe('NavButton', () => {
  it('should render', () => {
    render(
      <NavButton
        variant="button"
        icon={() => <div>Icon</div>}
        onClick={() => jest.fn()}
      />
    );
  });
});
