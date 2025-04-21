import React from 'react';
import reactLogo from '@assets/react.svg';

const App: React.FC = () => {
  return (
    <div className="app">
      <img src={reactLogo} alt="React Logo" width={100} />
      <h1>React + TypeScript App</h1>
      <p>
        Edit <code>src/App.tsx</code> to start coding!
      </p>
    </div>
  );
};

export default App;
