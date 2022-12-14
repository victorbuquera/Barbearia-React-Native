import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Login = {
  async auth(email, password) {
    try {
      const response = await axios.post('http://10.0.3.2/api/login', {
        email,
        password,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default Login;

const SignUp = {
  async register(name, lastName, email, phone, password, passwordConfirmation) {
    try {
      const response = await axios.post('http://10.0.3.2/api/register', {
        name,
        lastName,
        email,
        phone,
        password,
        passwordConfirmation,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
