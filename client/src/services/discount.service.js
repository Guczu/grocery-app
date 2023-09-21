import axios from 'axios'

const API_URL = 'http://localhost:3001';

const isCodeValid = async (discountCode) => {
  try {
    const response = await axios.post(`${API_URL}/api/discount-code`, { code: discountCode });

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
