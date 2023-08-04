import { render } from '@testing-library/react';
import { describe, it } from 'vitest';

import Grid from './grid';

describe('<Grid />', () => {
  it('it should mount', () => {
    render(<Grid />);
  });
});
