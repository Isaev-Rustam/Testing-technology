import { useSelector } from 'react-redux';
import { useEffect, useLayoutEffect } from 'react';

import { RootState } from '../store/store';

import useAction from './useAction';

function useTheme() {
  const theme = useSelector((state: RootState) => state.global.theme);
  const { switchTheme, setTheme } = useAction();

  useEffect(() => {
    // console.log('useEffect');
  }, []);

  useLayoutEffect(() => {
    // console.log('useLayoutEffect');

    const storage = localStorage.getItem('theme');
    if (storage) {
      setTheme(JSON.parse(storage));
    }
  }, []);

  useLayoutEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      theme ? 'black' : 'white'
    );
    localStorage.setItem('theme', String(theme));
  }, [theme]);

  return [theme, switchTheme] as const;
}
export default useTheme;
