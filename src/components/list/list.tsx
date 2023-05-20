import { FC, memo } from 'react';

interface ListProps {
  num: number;
  id: number;
}

const List: FC<ListProps> = memo(({ num, id }) => (
  <div className="border-solid border-2 border-yellow-400 max-w-xs mb-1.5">
    <span className="border-solid border-r-4 border-purple-500">{id} : </span>{' '}
    {num}
  </div>
));

export default List;
