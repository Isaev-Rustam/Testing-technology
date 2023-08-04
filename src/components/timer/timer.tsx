import { FC, memo } from 'react';

import Pause from '../svg/pause';
import Play from '../svg/play';

interface TimerProps {
  sec: string;
  min: string;
  handlerPlay: () => void;
  handlerPause: () => void;
}

const Timer: FC<TimerProps> = memo(
  ({ min, sec, handlerPlay, handlerPause }) => {
    console.log(2);
    return (
      <>
        <div className="font-bold text-2xl">
          <span> {min} </span> :<span> {sec} </span>
        </div>
        <div className="border-4 border-amber-950 w-20 flex justify-around">
          <button type="button" onClick={handlerPlay}>
            <Play size={20} />
          </button>
          <button type="button" onClick={handlerPause}>
            <Pause size={20} />
          </button>
        </div>
      </>
    );
  }
);

export default Timer;
