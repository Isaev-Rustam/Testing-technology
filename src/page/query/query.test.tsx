import { describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';

import Query from './query';

const queryClient = new QueryClient();
describe('render  <Query/>', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should ', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Query />
      </QueryClientProvider>
    );
    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug();
  });
});
