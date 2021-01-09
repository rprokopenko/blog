import React from 'react';
import { Header } from './components';
import { Home } from './pages';

const App = () => {
  return (
    <>
      <Header />
      <div className='wrapper'>
        <div className='content'>
          <Home />
        </div>
      </div>
    </>
  );
};

export default App;
