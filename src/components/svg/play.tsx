import { FC } from 'react';

interface IPlay {
  size: number;
}
const Play: FC<IPlay> = ({ size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#47386b"
    stroke="#47386b"
    viewBox="0 0 32 32"
    width={`${size}px`}
  >
    <path d="M5.92 24.096q0 1.088.928 1.728.512.288 1.088.288.448 0 .896-.224l16.16-8.064q.48-.256.8-.736T26.08 16t-.288-1.056-.8-.736L8.832 6.144q-.448-.224-.896-.224-.544 0-1.088.288-.928.608-.928 1.728v16.16z" />
  </svg>
);
export default Play;
