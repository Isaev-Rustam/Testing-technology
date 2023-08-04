import { render } from '@testing-library/react';
import { describe, it } from 'vitest';

import TimerContainer from './timer-container';

describe('<TimerContainer />', () => {
  it('it should mount', () => {
    render(<TimerContainer />);
  });
});
