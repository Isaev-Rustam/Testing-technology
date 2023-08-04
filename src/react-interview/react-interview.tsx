import { cloneElement } from 'react';

const F2 = (ar: JSX.Element[], b: JSX.Element) =>
  ar.reduceRight(
    (previousValue, currentValue) =>
      cloneElement(currentValue, {}, previousValue),
    b
  );

const ReactInterview = () => (
  <div>
    {F2([<div id="1" />, <p id="2" />], <span id="3">div text div</span>)}
  </div>
);

export default ReactInterview;
