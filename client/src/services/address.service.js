import axios from 'axios'
import { API_URL } from '../constants';

const editAddress = async (data) => {
  try {
    const userId = localStorage.getItem('userId');
    const response = await axios.post(`${API_URL}/api/address/add`, { ...data, userId: userId });

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

const getAddress = async () => {
    try {
      const userId = localStorage.getItem('userId');

      if (!userId) {
        return null;
      }

      const response = await axios.get(`${API_URL}/api/address/get`, { params: {userId: userId} });
  
      return response.data;
      
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
  editAddress,
  getAddress
};
