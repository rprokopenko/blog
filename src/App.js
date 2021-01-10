import React from 'react';
import { Header, Sidebar } from './components';
import { Home } from './pages';

const App = () => {
  return (
    <>
      <Header />
      <div className='wrapper'>
        <div className='content'>
          <div className='columns'>
            <div className='main-column'>
              <Home />
            </div>
            <div className='column'>
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
