import { Link } from 'react-router-dom';

function Header() {
  return (
    <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
      <Link to="/">Home</Link>
      <Link to="query">Query</Link>
      <Link to="tailwind-ui">tailwind-ui</Link>
      <Link to="yup">Yup</Link>
      <Link to="test">Test</Link>
      <Link to="react-test">React test</Link>
      <Link to="web-socket">Web socket</Link>
    </div>
  );
}

export default Header;
