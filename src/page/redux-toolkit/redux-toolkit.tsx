import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import useAction from '../../hoock/useAction';
import { RootState } from '../../store/store';
import { List } from '../../components/list';

const RToolkit = () => {
  const { getData } = useAction();
  const { data, loading } = useSelector((state: RootState) => state.data);

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {loading === 'pending' && <h1>...Loading</h1>}
      {loading === 'succeeded' &&
        data.map((i) => <List title={i.title} id={i.id} key={i.title} />)}
    </>
  );
};

export default RToolkit;
