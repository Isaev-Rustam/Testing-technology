import { useEffect, useState } from 'react';

import TimerContainer from '../../containers/timer-container/timer-container';
import { CustomHook } from '../../components/custom-hook';
import { UseDeferredValue } from '../../components/use-deferred-value';
import Classes from '../../components/classes/classes';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const toggle = () => setIsActive(!isActive);

  const reset = () => {
    setSeconds(0);
    setIsActive(false);
  };

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="timer">
      <h1>{seconds}s</h1>
      <button type="button" onClick={toggle}>
        {isActive ? 'Pause' : 'Start'}
      </button>
      <button type="button" onClick={reset}>
        Reset
      </button>
    </div>
  );
};

const Test = () => (
  <>
    <Classes />
    <Timer />
    <CustomHook />
    <TimerContainer />
    <UseDeferredValue />
  </>
);

export default Test;

const square = (n: number): boolean | number => {
  if (n % 2 !== 0) return false;
  return Math.sqrt(n);
};
const debounce = <T extends (...ar: any[]) => void>(fn: T, tm: number) => {
  let id: ReturnType<typeof setTimeout>;
  return (...ar: any[]) => {
    clearTimeout(id);
    id = setTimeout(() => fn.apply(null, [...ar]), tm);
  };
};

const throttle = <T extends (...ar: unknown[]) => void>(cb: T, tm: number) => {
  let isWaiting = true;

  return (...ar: any) => {
    if (!isWaiting) return;
    cb(...ar);
    isWaiting = false;
    setTimeout(() => {
      isWaiting = true;
    }, tm);
  };
};

const isEqual = (a: any[], b: any[]) => JSON.stringify(a) === JSON.stringify(b);
const memoIz = (fn: (...ar: number[]) => number) => {
  const cache: Record<string, any> = {};
  return (...ar: number[]) => {
    if (cache[JSON.stringify(ar)]) return cache[JSON.stringify(ar)];
    const cacheV = fn(...ar);
    cache[JSON.stringify(ar)] = cacheV;
    return cacheV;
  };
};

const add = (a: number, b: number) => a + b;

export { debounce, throttle, square, memoIz, isEqual, add };
