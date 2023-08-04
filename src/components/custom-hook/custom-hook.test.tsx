import { render } from '@testing-library/react';
import { describe, it } from 'vitest';

import CustomHook from './custom-hook.tsx';

describe('<CustomHook />', () => {
  it('it should mount', () => {
    render(<CustomHook />);
  });
});

