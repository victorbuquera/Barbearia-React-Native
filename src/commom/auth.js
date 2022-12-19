import axios from 'axios';

const auth = {
  async signIn(email, password) {
    try {
      const response = await axios.post('/api/signin', {email, password});
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
