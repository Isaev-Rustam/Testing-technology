import { useState } from 'react';

export default function Act() {
  const [state, setState] = useState<boolean>(false);

  const handlerBtn = () => {
    setTimeout(() => {
      setState((s) => !s);
    }, 2000);
  };

  return (
    <div
      style={{ border: '3px solid red', marginTop: '30px', maxWidth: '250px' }}
    >
      Act
      {state && <div>lorem</div>}
      <button onClick={handlerBtn} type="button">
        {!state ? 'btn' : 'XbtnX'}
      </button>
    </div>
  );
}
