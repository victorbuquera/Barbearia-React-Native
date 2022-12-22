import React from 'react';
import {Provider} from 'react-redux';
import Router from './src/routes/Router';
import store from './src/commom/store'; // Importa a store do Redux

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
