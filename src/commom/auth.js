import axios from 'axios';
import store from './store';

const Login = {
  async auth(email, password) {
    try {
      const response = await axios.post('http://10.0.3.2/api/login', {
        email,
        password,
      });

      const {token} = response.data;
      store.dispatch({type: 'LOGIN', token});
      console.log('dispatch do auth' + JSON.stringify(response));
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
/* 
function getUser(){
  const userResponse = await axios.get('http://10.0.3.2/api/user', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const user = userResponse.data;

  store.dispatch({type: 'UPDATE_USER', user});
}
 */
