import { useEffect, useState } from 'react';

export const App = () => {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setData('data');
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      <h1>Hello world</h1>

      <button type="button">
        click me
      </button>

      <input type="text" placeholder="input value..." />
      {data && <div style={{ color: 'red' }}>{data}</div>}
    </div>
  );
};
