import { useState } from 'react';

import List from '../../components/list/list';
import { Button } from '../../components/button';

export interface INum {
  num: number;
  key: number;
}

const random = () =>
  new Array(10)
    .fill(null)
    .map((_, index) => ({ num: Math.random(), key: index }));

const ListContainer = () => {
  const [num, setNum] = useState<INum[]>(() => random());

  const handlerBtn = () => {
    setNum((n) =>
      n.map((i, index) => {
        if (index === 0) return { ...i, num: Math.random() };
        return i;
      })
    );
  };

  return (
    <>
      <Button handlerBtn={handlerBtn}>btn</Button>

      {num.map((i) => (
        <List key={i.key} num={i.num} id={i.key} />
      ))}
    </>
  );
};

export default ListContainer;
