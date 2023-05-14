import { useState } from 'react';

export function Events() {
  const [state, setState] = useState<number>(0);
  const [disable, setDisable] = useState<boolean>(true);

  const handlerBtnSum = () => {
    setState((s) => s + 1);
    setDisable((s) => !s);
  };
  const handlerBtnDifference = () => {
    setState((s) => s - 1);
    setDisable((s) => !s);
  };

  return (
    <div
      style={{ border: '3px solid blue', marginTop: '30px', maxWidth: '250px' }}
    >
      Events
      <div style={{ textAlign: 'center' }}>{state}</div>
      <button onClick={handlerBtnDifference} type="button" disabled={disable}>
        -
      </button>
      <button onClick={handlerBtnSum} type="button" disabled={!disable}>
        +
      </button>
    </div>
  );
}
