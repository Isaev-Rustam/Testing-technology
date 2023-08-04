import { Counter, CreateProvider } from './counter1';
import { Counter2, CreateProvider2 } from './couner2';

const Children = () => (
  <>
    <CreateProvider>
      <Counter>
        <Counter.Title>Counter</Counter.Title>
        <Counter.Increment>+</Counter.Increment>
        <Counter.Value />
        <Counter.Decrement>-</Counter.Decrement>
      </Counter>
    </CreateProvider>
    <CreateProvider2>
      <Counter2>
        <Counter2.Title>Counter</Counter2.Title>
        <Counter2.Value />
        <Counter2.Increment>+</Counter2.Increment>
        <Counter2.Decrement>-</Counter2.Decrement>
      </Counter2>
    </CreateProvider2>
  </>
);

export default Children;
