import { FC, MouseEventHandler } from 'react';

interface Btn {
  label: string;
  handlerBtn: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<Btn> = ({ label, handlerBtn }) => (
  <button
    className="border-solid border-2 border-sky-500 mb-2"
    type="button"
    onClick={handlerBtn}
  >
    {label}
  </button>
);

export default Button;
