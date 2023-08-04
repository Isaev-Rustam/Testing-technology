import { useCallback, useEffect, useRef, useState } from 'react';

import Timer from '../../components/timer/timer';

const TimerContainer = () => {
  const [min, setMin] = useState(1);
  const [sec, setSec] = useState(1);
  const [count, setCount] = useState(false);

  const ref = useRef(0);

  const handlerPlay = useCallback(() => {
    ref.current = Date.now() + sec * 1000 + min * 60 * 1000;
    setCount(() => true);
  }, []);

  const handlerPause = useCallback(() => {
    setCount(() => false);
    ref.current = 0;
  }, []);

  useEffect(() => {
    if (min <= 0 && sec <= 0) handlerPause();
  });

  useEffect(() => {
    if (count) {
      const id = setInterval(() => {
        setSec(() => Math.floor((ref.current - Date.now()) / 1000) % 60);
        setMin(() => Math.floor((ref.current - Date.now()) / (1000 * 60)) % 60);
      }, 1000);
      return () => clearInterval(id);
    }
    return undefined;
  }, [count]);
  console.log(1);
  return (
    <Timer
      min={String(min).padStart(2, '0')}
      sec={String(sec).padStart(2, '0')}
      handlerPause={handlerPause}
      handlerPlay={handlerPlay}
    />
  );
};

export default TimerContainer;
