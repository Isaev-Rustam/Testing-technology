import { render, screen } from '@testing-library/react';

import List from './list';

describe('<List />', () => {
  test('it should mount', () => {
    render(<List num={736} id={12} />);
    // screen.getByText(/1/i);
    screen.getByText(/12/i);
    screen.getByText(/736/i);
  });
});
