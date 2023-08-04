import { ChangeEvent, useEffect, useState } from 'react';

const useDebounce = (value: string, tm: number) => {
  const [state, setState] = useState(value);

  useEffect(() => {
    const id = setTimeout(() => setState(value), tm);
    return () => clearTimeout(id);
  }, [value]);

  return state;
};

// const useInput = (value = '') => {
//   const [inp, setInp] = useState(value);
//   const handleInput = ({ target }: ChangeEvent<HTMLInputElement>) => {
//     setInp(target.value);
//   };
//   return [inp, handleInput] as const;
// };
const CustomHook = () => {
  const [inp, setInp] = useState('');
  const debounceValue = useDebounce(inp, 1000);

  useEffect(() => {
    // console.log(debounceValue);
  }, [debounceValue]);
  const handleInput = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setInp(target.value);
  };
  return (
    <div className="border-4 w-52 mt-4 border-amber-950">
      <input
        type="text"
        value={inp}
        onChange={handleInput}
        className="border-4 border-blue-700 mx-auto block"
      />
      <div className="h-10">{inp}</div>
    </div>
  );
};

export default CustomHook;
