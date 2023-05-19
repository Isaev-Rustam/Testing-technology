import { Link } from 'react-router-dom';

import Svg from '../svg/svg';

const Header = () => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: '20px',
      height: '50px',
      marginBottom: '30px',
      padding: '0 20px',
    }}
  >
    <Link to="/">Home</Link>
    <Link to="query">Query</Link>
    <Link to="modal">modal</Link>
    <Link to="yup">Yup</Link>
    <Link to="test">Test</Link>
    <Link to="react-test">React test</Link>
    <Link to="web-socket">Web socket</Link>
    <Link to="list">List</Link>

    <Link to="/" style={{ marginLeft: 'auto' }}>
      <Svg />
    </Link>
  </div>
);

export default Header;
