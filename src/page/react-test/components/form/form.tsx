import { ChangeEvent, ReactNode, useEffect, useState } from 'react';

const tm = (s: number): Promise<string> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve('Data');
    }, s);
  });

interface ISearch {
  value: string;
  children?: ReactNode;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function Search({ value, onChange, children }: ISearch) {
  return (
    <div>
      <label htmlFor="search" style={{ color: 'blue' }}>
        {children}
      </label>
      <input id="search" type="text" value={value} onChange={onChange} />
    </div>
  );
}

export default function Form() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState('');

  useEffect(() => {
    tm(200).then(setData);
  }, []);

  const onChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setSearch(value);
  };

  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.target.reset();
    console.dir(e.target);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <Search value={search} onChange={onChange}>
          Search :{' '}
        </Search>
        <p>Searches for {search || '...'}</p>
        <button type="submit" style={{ cursor: 'pointer' }}>
          submit
        </button>
      </form>
      {data ? <p>Signed in as {data}</p> : null}
    </div>
  );
}
