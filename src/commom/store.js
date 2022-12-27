import {createStore, applyMiddleware} from 'redux';

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const UPDATE_USER = 'UPDATE_USER';

function reducer(state, action) {
  switch (action.type) {
    case LOGIN:
      console.log('UPDATE DE ESTADO FUNCIONANDO');
      console.log(action);
      console.log(JSON.stringify(action));
      return {
        loggedIn: true,
        user: action.user,
      };
    case LOGOUT:
      return {
        loggedIn: false,
        user: null,
      };
    case UPDATE_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
}
const store = createStore(reducer, {loggedIn: false, user: null, token: null});

export default store;
