import {createStore, applyMiddleware} from 'redux';

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

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
const store = createStore(reducer, {loggedIn: false, user: null, token: null});

export default store;
