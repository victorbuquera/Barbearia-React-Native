import {createStore} from 'redux';

// Define as ações do aplicativo
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

// Define as reduções de estado para cada ação
function reducer(state, action) {
  switch (action.type) {
    case LOGIN:
      console.log('UPDATE DE ESTADO FUNCIONANDO');
      return {
        loggedIn: true,
        user: action.user,
      };
    case LOGOUT:
      return {
        loggedIn: false,
        user: null,
      };
    default:
      return state;
  }
}

// Cria a store do Redux com o reducer e o estado inicial
const store = createStore(reducer, {loggedIn: false, user: null});

export default store;
