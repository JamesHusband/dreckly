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
        cuisines={[
          {
            name: 'Name',
            icon: 'PieChart',
          },
          {
            name: 'Name2',
            icon: 'PieChart',
          },
        ]}
      />
    );
    expect(screen.getByText('What are you craving?')).toBeInTheDocument();
    expect(CuisineCard).toHaveBeenCalledTimes(2);
  });
});
