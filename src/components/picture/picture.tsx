import { FC } from 'react';

import imgX1 from '../../assets/imgX1.jpg';
import imgX2 from '../../assets/imgX2.jpg';
import imgX2Webp from '../../assets/imgX2.webp';
import tiger from '../../assets/tiger.jpeg';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PictureProps {}

const Picture: FC<PictureProps> = () => (
  <div className="">
    <img
      className=""
      src={imgX1}
      srcSet={`${imgX1} 500w, ${tiger} 1000w`}
      sizes="(max-width: 450px) 500w, (max-width: 451) 1000w, "
      alt="x1"
    />
  </div>
);

export default Picture;
