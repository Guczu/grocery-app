import axios from 'axios'
import { API_URL } from '../constants';

const isCodeValid = async (discountCode) => {
  try {
    const response = await axios.get(`${API_URL}/api/discount-code`, { params: {code: discountCode} });

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
  isCodeValid,
};
