import axios from 'axios';

/*const Login = {
  async auth(email, password) {
    const response = await axios.post('http://10.0.2.2/api/signin', {
      email,
      password,
    });
    return response.data;
  },
};

export default Login;
*/

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
const register = {
  async Register(name, lastName, email, cel, password, passwordConfirmation) {
    try {
      const response = await axios.post('http://10.0.2.2/api/register', {
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
