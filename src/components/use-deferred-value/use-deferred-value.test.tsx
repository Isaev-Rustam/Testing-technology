import { render } from '@testing-library/react';
import { describe, it } from 'vitest';

import UseDeferredValue from './use-deferred-value';

describe('<UseDeferredValue />', () => {
  it('it should mount', () => {
    render(<UseDeferredValue />);
  });
});
