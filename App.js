import React from 'react';
import {Provider} from 'react-redux';
import Router from './src/routes/Router';
import store from './src/commom/reducers/store';

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
