// eslint-disable-next-line @typescript-eslint/no-empty-interface
import { useEffect, useRef, useState } from 'react';
import './style.css';

const VirtualScroll = ({ data, rowHeight, visibleRows }) => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [start, setStart] = useState(0);

  function getTopHeight() {
    return rowHeight * start;
  }
  function getBottomHeight() {
    return rowHeight * (data.length - (start + visibleRows + 1));
  }

  useEffect(() => {
    function onScroll(e) {
      setStart(
        Math.min(
          data.length - visibleRows - 1,
          Math.floor(e.target.scrollTop / rowHeight)
        )
      );
    }
    rootRef.current?.addEventListener('scroll', onScroll, false);

    return () => {
      rootRef.current?.removeEventListener('scroll', onScroll);
    };
  }, [data.length, visibleRows, rowHeight]);

  return (
    <div
      className="w-2/3"
      style={{ height: rowHeight * visibleRows + 1, overflow: 'auto' }}
      ref={rootRef}
    >
      <div style={{ height: getTopHeight() }} />
      <table>
        <tbody>
          {data.slice(start, start + visibleRows + 1).map((row, rowIndex) => (
            <tr style={{ height: rowHeight }} key={start + rowIndex}>
              {row.map((text, colIndex) => (
                <td key={`${start}${rowIndex}${colIndex}`}>{text}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ height: getBottomHeight() }} />
    </div>
  );
};

function makeTableData(w, h) {
  return new Array(h)
    .fill(0)
    .map((_, row) => new Array(w).fill(0).map((_, col) => row * 10 + col));
}

const WrapVirtualScroll = () => (
  <VirtualScroll
    data={makeTableData(5, 10000)}
    rowHeight={40}
    visibleRows={3}
  />
);

export default WrapVirtualScroll;
