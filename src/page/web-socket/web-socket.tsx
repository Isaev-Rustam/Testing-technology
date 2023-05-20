import { useEffect, useState } from 'react';

const ws = new WebSocket(
  'wss://demo.piesocket.com/v3/channel_123?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self'
);

const WebSocketComponent = () => {
  const [state, satState] = useState<string[]>([]);

  useEffect(() => {
    ws.onmessage = (event) => {
      if (!state.includes(event.data)) {
        satState((ar) => [...ar, event.data]);
      }
      // console.log(state.includes('HEARTBEAT'));
      // console.log(event.data);
      // console.log(state);
    };
  }, [state]);

  return (
    <ul>
      <h1>List</h1>
      {state.map((str) => (
        <li key={Math.random() * Date.now()}>{str}</li>
      ))}
    </ul>
  );
};

export default WebSocketComponent;
