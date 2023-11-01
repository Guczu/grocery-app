import axios from 'axios'
import { API_URL } from '../constants';

const addEmailToNewsletter = async (email) => {
  try {
    const response = await axios.post(`${API_URL}/api/newsletter/add`, { email: email });

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    if (error.response) {
      console.error('HTTP Error: ', error.response.status);
      console.error('Error message: ', error.response.data.message);
    } else if (error.request) {
      console.error('Could not reach the server');
    } else {
      console.error('Unexpected error: ', error.message);
    }
  }
};

export {
  addEmailToNewsletter,
};
