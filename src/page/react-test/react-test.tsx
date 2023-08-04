import Context from '../../components/context/context';
import Ref from '../../components/ref/ref';
import Children from '../../components/children/children';
import Picture from '../../components/picture/picture';
import WrapVirtualScroll from '../../components/virtualScroll/virtualScroll';

import Act from './components/act/act';
import Form from './components/form/form';
import { Events } from './components/event/event';
import Axios from './components/axios/axios';

const ReactTest = () => (
  <div>
    <WrapVirtualScroll />
    <Act />
    <Form />
    <Events />
    <Axios />
    <Context />
    <Ref />
    <Children />
    <Picture />
  </div>
);

export default ReactTest;
