import { Route, Routes } from 'react-router-dom';

import Layout from './layout';
import Home from './page/home';
import Query from './page/query';
import ReactTest from './page/react-test';
import Test from './page/test';
import WebSocketComponent from './page/web-socket';
import Yup from './page/yup';
import TailwindUi from './page/tailwind-ui';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="query" element={<Query />} />
        <Route path="tailwind-ui" element={<TailwindUi />} />
        <Route path="yup" element={<Yup />} />
        <Route path="test" element={<Test />} />
        <Route path="react-test" element={<ReactTest />} />
        <Route path="web-socket" element={<WebSocketComponent />} />
        {/* <Route path="tasks" element={<DashboardTasks />} /> */}
      </Route>
      {/* <Route path="about" element={<AboutPage />} /> */}
    </Routes>
  );
}

export default App;
