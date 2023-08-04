import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../store/store';
import {
  decrement,
  increment,
  incrementByAmount,
} from '../../store/counter/counterSlice';
import { Button } from '../../components/button';

const Home = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <Button
        aria-label="Increment value"
        handlerBtn={() => dispatch(increment())}
      >
        Increment
      </Button>
      <Button
        aria-label="Decrement value"
        handlerBtn={() => dispatch(decrement())}
      >
        Decrement
      </Button>
      <Button
        aria-label="Decrement value"
        handlerBtn={() => dispatch(incrementByAmount(5))}
      >
        incrementByAmount
      </Button>
      <span>{count}</span>
    </div>
  );
};

export default Home;
