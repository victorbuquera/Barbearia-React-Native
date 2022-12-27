import {createStore} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('token', jsonValue);
  } catch (e) {
    throw e;
  }
}

function reducer(state, action) {
  switch (action.type) {
    case LOGIN:
    storeData(action);
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

const store = createStore(reducer, {loggedIn: false, user: null});

export default store;
