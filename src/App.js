import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { NotificationContainer } from 'react-notifications';

import Public from './pages';
import Private from './pages/admin';
import { Modal } from './components';

const App = () => {
  const { isShow } = useSelector(({ modal }) => modal);

  return (
    <>
      {isShow ? <Modal /> : ''}
      <Switch>
        <Route path='/admin' component={Private} />
        <Route path='/' component={Public} />
      </Switch>
      <NotificationContainer />
    </>
  );
};

export default App;
