import {createStore} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async value => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('token', jsonValue);
  } catch (e) {
    throw e;
  }
};

export const initialState = {
  avatar: '',
  email: '',
  favorites: [],
  appointments: [],
  loggedIn: Boolean,
};

function userContext(state, action) {
  switch (action.type) {
    case 'LOGIN':
      storeData(action);
      return {
        loggedIn: true,
        user: action.user,
      };
    case 'LOGOUT':
      return {
        loggedIn: false,
        user: null,
      };
    case 'setAvatar':
      return {...state, avatar: action.avatar};
    default:
      return state;
  }
}

const store = createStore(userContext, initialState);

export default store;
