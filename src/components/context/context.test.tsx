import { render } from '@testing-library/react';
import { describe, it } from 'vitest';

import Context from './context';

describe('<Context />', () => {
  it('it should mount', () => {
    render(<Context />);
  });
});
