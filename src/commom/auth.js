import axios from 'axios';
import {api_server} from 'react-native-dotenv';

const Login = {
  async auth(email, password) {
    try {
      const response = await axios.post('http://10.0.2.2/api/signin', {
        email,
        password,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

const register = {
  async Register(name, lastName, email, cel, password, passwordConfirmation) {
    try {
      const response = await axios.post(api_server + '/register', {
        name,
        lastName,
        email,
        cel,
        password,
        passwordConfirmation,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
