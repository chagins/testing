import { useEffect, useState } from 'react';

export const App = () => {
  const [data, setData] = useState<string | null>(null);
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState('');

  const onClick = () => {
    setToggle((prev) => !prev);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setData('data');
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      <h1>Hello world</h1>

      <button type="button" onClick={onClick} data-testid="toggle-btn">
        click me
      </button>
      {toggle && <div data-testid="toggled-element">toggled</div>}

      <input
        type="text"
        placeholder="input value..."
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <h2 data-testid="value-element">{value}</h2>

      {data && <div style={{ color: 'red' }}>{data}</div>}
    </div>
  );
};
