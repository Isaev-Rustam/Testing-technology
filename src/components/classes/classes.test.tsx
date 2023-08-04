import { render } from '@testing-library/react';
import { describe, it } from 'vitest';

import Classes from './classes';

describe('<Classes />', () => {
  it('it should mount', () => {
    render(<Classes />);
  });
});
