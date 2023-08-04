import { Outlet } from 'react-router-dom';

import Header from '../components/header';
import Content from '../components/content/content';

const Layout = () => (
  <Content>
    <Header />
    <Outlet />
  </Content>
);

export default Layout;
