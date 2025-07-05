import { render } from '@testing-library/react';

import { ClientLayout } from '.';

describe('SharedLayout', () => {
  it('should render successfully', () => {
    const { getByText } = render(<ClientLayout>Hello</ClientLayout>);
    expect(getByText('Hello')).toBeInTheDocument();
  });
});
