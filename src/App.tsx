import { Route, Routes } from 'react-router-dom';
import { lazy, ReactNode, Suspense } from 'react';

import Layout from './layout';
import Home from './page/home';
// import Query from './page/query';
import ReactTest from './page/react-test';
import Test from './page/test';
import WebSocketComponent from './page/web-socket';
import Yup from './page/yup';
// import TailwindUi from './page/modal';
import ListContainer from './containers/listContainer/list-container';
import { RToolkit } from './page/redux-toolkit';
import { ClassesPage } from './page/clasess';
import { Grid } from './page/grid';
import { ReactInterview } from './react-interview';

const WrapSuspense = ({ children }: { children: ReactNode | null }) => (
  <Suspense fallback={<div>Загрузка...</div>}>{children}</Suspense>
);

const Query = lazy(() => import('./page/query'));
const TailwindUi = lazy(() => import('./page/modal'));

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route
        path="query"
        element={
          <WrapSuspense>
            <Query />
          </WrapSuspense>
        }
      />
      <Route
        path="modal"
        element={
          <WrapSuspense>
            <TailwindUi />
          </WrapSuspense>
        }
      />
      <Route path="yup" element={<Yup />} />
      <Route path="test" element={<Test />} />
      <Route path="react-test" element={<ReactTest />} />
      <Route path="web-socket" element={<WebSocketComponent />} />
      <Route path="list" element={<ListContainer />} />
      <Route path="r-toolkit" element={<RToolkit />} />
      <Route path="grid" element={<Grid />} />
      <Route path="classes" element={<ClassesPage />} />
      <Route path="ReactInterview" element={<ReactInterview />} />
    </Route>
    {/* <Route path="about" element={<AboutPage />} /> */}
  </Routes>
);

export default App;
