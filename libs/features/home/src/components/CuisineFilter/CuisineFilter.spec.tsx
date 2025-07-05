import { render, screen } from '@testing-library/react';
import { CuisineFilter } from '.';
import { CuisineCard } from '@dreckly/shared-ui-kit';

jest.mock('@dreckly/shared-ui-kit', () => ({
  CuisineCard: jest.fn(),
}));

describe('CuisineFilter', () => {
  it('should render', () => {
    render(
      <CuisineFilter
        cuisineTypes={[
          { name: 'Name', icon: () => <div>Icon</div> },
          { name: 'Name2', icon: () => <div>Icon2</div> },
        ]}
      />
    );
    expect(screen.getByText('What are you craving?')).toBeInTheDocument();
    expect(CuisineCard).toHaveBeenCalledTimes(2);
  });
});
