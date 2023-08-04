import { FC, forwardRef, useRef, useState } from 'react';

import Button from '../button/button';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface RefProps {}

const Ref: FC<RefProps> = () => {
  const refBtn = useRef<HTMLInputElement | null>(null);

  const handlerBtn = () => {
    refBtn.current?.focus();
  };

  return (
    <div>
      <div data-testid="Templatename">Ref Component</div>
      <Button handlerBtn={handlerBtn}>btn</Button>
      {/* eslint-disable-next-line @typescript-eslint/no-use-before-define */}
      <Input ref={refBtn} />
    </div>
  );
};
const Input = forwardRef((props, ref) => <input type="text" ref={ref} />);

export default Ref;
