import { useState } from 'react';

const App = () => {
  const [name, setName] = useState('Max');

  return (
    <>
      <h1>Vite Superpower is here!</h1>
      <button type="button" onClick={() => alert(`Welcome, ${name}!`)}>
        Click me!
      </button>
    </>
  );
};

export default App;
