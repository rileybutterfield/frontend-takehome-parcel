import React from 'react';
import { Navbar } from './components';
import Routes from './routes';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="main">
        <Routes />
      </div>
    </>
  );
};

export default App;
