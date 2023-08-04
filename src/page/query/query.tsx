import { useMutation, useQuery, useQueryClient } from 'react-query';
import { ChangeEvent, useState } from 'react';

import Api from '../../services/api';
import { ITodo } from '../../types/json-server';

const Query = () => {
  const [inp, setInp] = useState<string>('');
  const queryClient = useQueryClient();

  const { isLoading, error, data, isSuccess } = useQuery({
    queryKey: ['todo'],
    queryFn: () => Api.getTodos<ITodo>(),
  });

  const mutationAdd = useMutation({
    mutationFn: (d: ITodo) => Api.createTodo<ITodo>(d),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todo'] });
    },
  });

  const mutationDelete = useMutation({
    mutationFn: (id: number) => Api.deleteTodo(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todo'] });
    },
  });

  // eslint-disable-next-line react/no-unescaped-entities
  if (isLoading) return <div>'Loading...'</div>;

  if (error instanceof Error)
    return <div>{`An error has occurred: ${error.message}`}</div>;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setInp(e.target.value);

  const handleAdd = () => {
    if (inp.trim()) {
      mutationAdd.mutate({
        id: Date.now(),
        title: inp,
        completed: false,
      });
      setInp('');
    }
  };

  const handleDelete = (id: number) => mutationDelete.mutate(id);

  return (
    <div style={{ width: '400px' }}>
      <input
        type="text"
        onChange={handleChange}
        value={inp}
        style={{ borderRight: 'none' }}
      />
      <button onClick={handleAdd} style={{ borderLeft: 'none' }} type="button">
        add
      </button>
      <ul>
        {isSuccess &&
          Array.isArray(data) &&
          data.map((i) => (
            <li key={i.id}>
              <button
                onClick={() => handleDelete(i.id)}
                style={{
                  cursor: 'pointer',
                  width: '100px',
                }}
                type="button"
              >
                {i.title}
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Query;
