import { FC, MouseEventHandler, ReactNode } from 'react';

interface Btn {
  className?: string;
  children?: ReactNode;
  handlerBtn?: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<Btn> = ({ children, handlerBtn, className, ...allProp }) => (
  <button
    className={`border-solid border-2 border-sky-500 mb-2 px-2 ${className}`}
    type="button"
    onClick={handlerBtn}
    {...allProp}
  >
    {children}
  </button>
);

export default Button;
