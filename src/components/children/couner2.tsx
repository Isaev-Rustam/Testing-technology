import { createContext, useContext, useMemo, useReducer } from 'react';

const CounterContext2 = createContext(null);

const CreateProvider2 = ({ children, value }) => (
  <CounterContext2.Provider value={value}>{children}</CounterContext2.Provider>
);

type ActionType = { type: 'increment' } | { type: 'decrement' };

const initialValue = { count: 0 };
const reducer = (state: typeof initialValue, action: ActionType) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const useCounterContext2 = () => {
  const value = useContext(CounterContext2);
  return useMemo(() => value, [value]);
};

const Counter2 = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValue);
  const increment = () => {
    dispatch({ type: 'increment' });
  };
  const decrement = () => {
    dispatch({ type: 'decrement' });
  };
  return (
    <CreateProvider2 value={{ increment, decrement, state: state.count }}>
      <div className="w-1/3 bg-red-500/10 flex justify-between flex-wrap">
        {children}
      </div>
    </CreateProvider2>
  );
};

const Title = ({ children }) => (
  <h4 className="w-full text-center">{children}</h4>
);

const Increment = ({ children }) => {
  const { increment } = useCounterContext2();
  return (
    <button onClick={increment} type="button" className="w-1/3 bg-red-500/10">
      {children}
    </button>
  );
};
const Decrement = ({ children }) => {
  const { decrement } = useCounterContext2();
  return (
    <button onClick={decrement} type="button" className="w-1/3 bg-red-500/10">
      {children}
    </button>
  );
};

const Value = () => {
  const { state } = useCounterContext2();
  return <div className="grow text-center">{state}</div>;
};

Counter2.Title = Title;
Counter2.Increment = Increment;
Counter2.Decrement = Decrement;
Counter2.Value = Value;

export { Counter2, CreateProvider2, useCounterContext2 };
