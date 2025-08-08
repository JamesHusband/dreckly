import { render } from '@testing-library/react';
import { Card } from './Card';

describe('Card', () => {
  it('should render with default props', () => {
    const { getByTestId } = render(
      <Card>
        <div data-testid="card-content" />
      </Card>
    );

    expect(getByTestId('card-content')).toBeInTheDocument();
  });

  it('should render with elevated variant', () => {
    const { getByTestId } = render(
      <Card variant="elevated">
        <div data-testid="card-content" />
      </Card>
    );

    expect(getByTestId('card-content')).toBeInTheDocument();
  });

  it('should render with outlined variant', () => {
    const { getByTestId } = render(
      <Card variant="outlined">
        <div data-testid="card-content" />
      </Card>
    );

    expect(getByTestId('card-content')).toBeInTheDocument();
  });

  it('should render with sticky positioning', () => {
    const { getByTestId } = render(
      <Card sticky>
        <div data-testid="card-content" />
      </Card>
    );

    expect(getByTestId('card-content')).toBeInTheDocument();
  });

  it('should render with hidden overflow', () => {
    const { getByTestId } = render(
      <Card overflow="hidden">
        <div data-testid="card-content" />
      </Card>
    );

    expect(getByTestId('card-content')).toBeInTheDocument();
  });

  it('should render children', () => {
    const { getByTestId } = render(
      <Card>
        <div data-testid="card-content" />
      </Card>
    );

    expect(getByTestId('card-content')).toBeInTheDocument();
  });
});
