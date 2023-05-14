import { useCallback, useState } from 'react';
import axios from 'axios';

interface RootObject {
  [type: string]: any;
}

export default function Axios() {
  const [users, setUsers] = useState<RootObject[]>([]);
  const [error, SetError] = useState<boolean>(false);

  const getUsers = useCallback(async () => {
    try {
      const resp = await axios.get<RootObject[]>(
        'https://jsonplaceholder.typicode.com/users'
      );
      console.log(resp.data);
      setUsers(resp.data);
      SetError(false);
    } catch (e) {
      setUsers([]);
      SetError(true);
    }
  }, []);

  const handleClick = () => {
    getUsers();
  };

  return (
    <div
      style={{ border: '3px solid blue', marginTop: '30px', maxWidth: '250px' }}
    >
      Axios
      <button
        onClick={handleClick}
        style={{ border: '3px solid green', width: '100%' }}
        type="button"
      >
        {'get Data '}
      </button>
      {error && <p style={{ color: 'red' }}>Something wrong</p>}
      {!error &&
        users.map((person) => (
          <div key={person.id} data-testid="custom-element">
            {person.name}
          </div>
        ))}
    </div>
  );
}
