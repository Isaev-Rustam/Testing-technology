import { FC, ReactNode, useContext, useState } from 'react';

import AdminContext, { IAppContext } from '../../context/context';

const initialValue: IAppContext = {
  title: 'Использование контекста React в TypeScript-приложениях',
  author: 'Harry Heman',
  url: 'http://example.com',
};

const Context = () => {
  const [state, setState] = useState(initialValue);

  return (
    <>
      {/* eslint-disable-next-line @typescript-eslint/no-use-before-define */}
      <Provider value={[state, setState]}>
        {/* eslint-disable-next-line @typescript-eslint/no-use-before-define */}
        <Data />
      </Provider>
      {/* eslint-disable-next-line @typescript-eslint/no-use-before-define */}
      <Provider value={state}>
        {/* eslint-disable-next-line @typescript-eslint/no-use-before-define */}
        <Data1 />
      </Provider>
    </>
  );
};
// interface IProvider {
//   children: ReactNode;
//   value: [x: IAppContext, y: () => void];
// }

const Provider: FC = ({ children, value }) => (
  <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
);

const Data = () => {
  const [data, setData] = useContext<IAppContext | null>(AdminContext);

  return (
    <div>
      <h5 className="mt-8">Context</h5>
      <button
        type="button"
        className="border-lime-700 border-x-4 border-y-2"
        onClick={() =>
          setData({
            title: '1',
            author: '2',
            url: '3',
          })
        }
      >
        btn
      </button>
      <div>{data.title}</div>
      <div>{data.author}</div>
      <div>{data.url}</div>
    </div>
  );
};
const Data1 = () => {
  const data = useContext<IAppContext | null>(AdminContext);

  return (
    <div className="pt-4">
      <div>{data?.title}</div>
      <div>{data?.author}</div>
      <div>{data?.url}</div>
    </div>
  );
};

export default Context;
