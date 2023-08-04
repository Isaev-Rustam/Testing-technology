import { Children, cloneElement, FC } from 'react';

import useTheme from '../../hoock/useTheme';

interface IToggle {
  checked?: boolean;
  handlerChange?: () => void;
}
const Toggle: FC<IToggle> = ({ checked, handlerChange }) => (
  <label className="relative inline-flex items-center mb-5 cursor-pointer">
    <input
      type="checkbox"
      value=""
      className="sr-only peer"
      onChange={handlerChange}
      checked={checked}
    />
    <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
  </label>
);

interface IToggleContainer {
  children: JSX.Element;
}
const ToggleContainer: FC<IToggleContainer> = ({ children }) => {
  const [theme, switchTheme] = useTheme();

  const handlerChange = () => switchTheme();
  const element = Children.only(children);

  return cloneElement<IToggle>(element, {
    handlerChange,
    checked: theme,
  });
};

export { Toggle, ToggleContainer };
