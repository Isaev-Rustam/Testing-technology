import {
  ChangeEvent,
  FC,
  useDeferredValue,
  useEffect,
  useMemo,
  useState,
} from 'react';

interface Root {
  id: number;
  name: string;
  body: string;
  postId?: number;
  email?: string;
}

const ListUsers: FC<Root> = ({ id, body, name }) => (
  <div key={id} className="border-2 mb-2 p-2">
    {id} :<div>{name}</div> <div>{body}</div>
  </div>
);
const UseDeferredValue = () => {
  const [input, setInput] = useState('');
  const [users, setUsers] = useState<Root[]>([]);

  const deferredValue = useDeferredValue(input);

  // const [isPending, startTransition] = useTransition();
  // const [searchTerm, setSearchTerm] = useState('');
  //
  // const usersMemo = useMemo(
  //   () => users.filter((i) => i.name?.concat(i.body).includes(searchTerm)),
  //   [searchTerm, users]
  // );
  const usersMemo = useMemo(
    () => users.filter((i) => i.name?.concat(i.body).includes(deferredValue)),
    [deferredValue, users]
  );

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => response.json())
      .then((json) => setUsers(json.splice(0, 3)));
  }, []);
  const handleQueryChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setInput(value);
    // startTransition(() => {
    //   setSearchTerm(value);
    // });
  };

  return (
    <div className="mt-4">
      <h1>List of users</h1>
      <input
        type="search"
        placeholder="Search users"
        className="border-4 my-2 border-purple-900"
        value={input}
        onChange={handleQueryChange}
      />

      <h2 className="mb-2">Search term: {input}</h2>

      {/* {isPending && <span>Loading...</span>} */}
      {usersMemo.map((user) => (
        <ListUsers
          key={user.id}
          id={user.id}
          body={user.body}
          name={user.name}
        />
      ))}
    </div>
  );
};

export default UseDeferredValue;
