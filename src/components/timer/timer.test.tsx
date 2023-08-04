import { render } from '@testing-library/react';
import { describe, it } from 'vitest';

import Timer from './timer';

describe('<Timer />', () => {
  it('it should mount', () => {
    render(<Timer />);
  });
});
