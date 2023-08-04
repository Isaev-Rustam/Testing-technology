import { render } from '@testing-library/react';
import { describe, it } from 'vitest';

import { Toggle } from './toggle';

describe('<Toggle />', () => {
  it('it should mount', () => {
    render(<Toggle />);
  });
});
