import { createContext, useContext, useMemo, useState } from 'react';

interface IContext {
  increment: () => {};
  decrement: () => {};
  state: number;
}

const CounterContext = createContext<IContext | null>(null);

const CreateProvider = ({ children, value }: { children: any; value: any }) => (
  <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
);

const useCounterContext = () => {
  const value = useContext(CounterContext);
  return useMemo(() => value, [value]);
};

const Counter = ({ children }: { children: any }) => {
  const [state, setState] = useState(0);
  const increment = () => {
    setState((n) => n + 1);
  };
  const decrement = () => {
    setState((n) => n - 1);
  };

  return (
    <CreateProvider value={{ increment, decrement, state }}>
      <div className="w-1/3 bg-red-500/10 flex justify-between flex-wrap">
        {children}
      </div>
    </CreateProvider>
  );
};

const Title = ({ children }: { children: any }) => (
  <h4 className="w-full text-center">{children}</h4>
);

const Increment = ({ children }: { children: any }) => {
  const context = useCounterContext();
  return (
    <button
      onClick={context ? context.increment : () => {}}
      type="button"
      className="w-1/3 bg-red-500/10"
    >
      {children}
    </button>
  );
};
const Decrement = ({ children }: { children: any }) => {
  const context = useCounterContext();
  return (
    <button
      onClick={context ? context.decrement : () => {}}
      type="button"
      className="w-1/3 bg-red-500/10"
    >
      {children}
    </button>
  );
};

const Value = () => {
  const context = useCounterContext();
  return <div className="grow text-center">{context?.state}</div>;
};

Counter.Title = Title;
Counter.Increment = Increment;
Counter.Decrement = Decrement;
Counter.Value = Value;

export { Counter, CreateProvider };
