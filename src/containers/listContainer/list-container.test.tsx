import { render } from '@testing-library/react';
import { vi } from 'vitest';
import { useState } from 'react';

import ListContainer, { INum } from './list-container';

vi.mock('react', async () => {
  const mod = await vi.importActual<typeof import('react')>('react');
  return {
    ...mod,
    useState: vi.fn(),
  };
});

const setState = vi.fn();

describe('<ListContainer />', () => {
  let data: Array<INum>;

  beforeEach(() => {
    data = [
      {
        num: 0.40087566465047053,
        key: 0,
      },
      {
        num: 0.8907186684708877,
        key: 1,
      },
      {
        num: 0.1238894002428641,
        key: 2,
      },
    ];
    (useState as any).mockImplementation(() => [data, setState]);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('it should mount', () => {
    render(<ListContainer />);
  });
});
