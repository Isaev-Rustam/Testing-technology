import { render } from '@testing-library/react';
import { describe, it } from 'vitest';

import Ref from './ref';

describe('<Ref />', () => {
  it('it should mount', () => {
    render(<Ref />);
  });
});
