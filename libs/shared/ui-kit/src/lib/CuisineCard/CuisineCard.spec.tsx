import { render, screen } from '@testing-library/react';
import { CuisineCard } from '.';

describe('CuisineCard', () => {
  it('should render', () => {
    render(
      <CuisineCard
        name="Name"
        icon="PieChart"
        iconComponent={() => <div>Icon</div>}
      />
    );
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Icon')).toBeInTheDocument();
  });
});
