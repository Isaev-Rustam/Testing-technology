import { render } from '@testing-library/react';
import { describe, it } from 'vitest';

import Children from './children';

describe('<Children />', () => {
  it('it should mount', () => {
    render(<Children />);
  });
});
