import { Link, useNavigate } from 'react-router-dom';

import Svg from '../svg/svg';
import Button from '../button/button';
import { ToggleContainer, Toggle } from '../toggle/toggle';

const Header = () => {
  const navigate = useNavigate();

  const handlerNavigate = () => navigate(-1);

  return (
    <div className="flex flex-wrap space-x-1  justify-between">
      <Link to="/">Home</Link>
      <Link to="query">Query</Link>
      <Link to="modal">modal</Link>
      <Link to="yup">Yup</Link>
      <Link to="test">Test</Link>
      <Link to="react-test">React test</Link>
      <Link to="web-socket">Web socket</Link>
      <Link to="list">List</Link>
      <Link to="r-toolkit">R toolkit</Link>
      <Link to="grid">Grid</Link>
      <Link to="classes">Classes</Link>
      <Link to="ReactInterview">React-Interview</Link>
      <Button
        handlerBtn={handlerNavigate}
        className="px-2 hover:bg-amber-700 transition-colors duration-500"
      >
        Back
      </Button>
      <ToggleContainer>
        <Toggle />
      </ToggleContainer>
      <Link to="/" className="ml-2">
        <Svg />
      </Link>
    </div>
  );
};

export default Header;
