import { useState } from 'react';

export const HelloWorldPage = () => {
  const [value, setValue] = useState('');
  const [visible, setVisible] = useState(false);

  const toggle = () => {
    if (value === 'hello') {
      setVisible((prev) => !prev);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input id="search" type="text" value={value} onChange={onChange} />
      <button id="toggle" type="button" onClick={toggle}>
        Hello world
      </button>
      {visible && <h1 id="hello">HELLO WORLD</h1>}
    </div>
  );
};
