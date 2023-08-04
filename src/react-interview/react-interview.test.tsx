import { render } from '@testing-library/react';
import { describe, it } from 'vitest';

import ReactInterview from './react-interview';

describe('<ReactInterview />', () => {
  it('it should mount', () => {
    render(<ReactInterview />);
  });
});
