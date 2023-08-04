import { describe, vi } from 'vitest';

import { add, debounce, memoIz, square, throttle } from './test';

describe('Base Test', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('square', () => {
    const spy = vi.spyOn(Math, 'sqrt');
    expect(square(3)).toBe(false);
    expect(spy).not.toHaveBeenCalled();
  });

  it('square', () => {
    const spy = vi.spyOn(Math, 'sqrt');
    expect(square(4)).toBe(2);
    expect(spy).toHaveBeenCalled();
    expect(square(4)).toMatchSnapshot();
  });
});

describe('debounce', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.restoreAllMocks();
  });
  it('should execute the function', () => {
    const mock = vi.fn(() => console.log('executed'));

    const fn = debounce(mock, 1000);

    for (let i = 0; i < 3; i += 1) {
      fn();
    }
    vi.runAllTimers();
    expect(mock).toHaveBeenCalledTimes(1);
  });
});
describe('throttle', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.restoreAllMocks();
  });
  it('should execute the function', () => {
    const mock = vi.fn(() => console.log('executed'));

    const fn = throttle(mock, 1000);

    for (let i = 0; i < 3; i += 1) {
      fn();
    }
    vi.runAllTimers();
    vi.advanceTimersByTime(1000);
    fn();
    expect(mock).toHaveBeenCalledTimes(2);
  });
});

describe('add', () => {
  it('should add', () => {
    expect(add(2, 2)).toBe(4);
  });
});

describe('memoIz', () => {
  it('should memoIz', () => {
    const addMock = vi.fn().mockImplementation((a, b) => a + b);
    const memeIzAdd = memoIz(addMock);
    expect(memeIzAdd(2, 3)).toBe(5);
    expect(memeIzAdd(2, 3)).toBe(5);
    expect(memeIzAdd(2, 3)).toBe(5);
    expect(addMock).toBeCalledTimes(1);
  });
});
