import axios from 'axios'

const API_URL = 'http://localhost:3001';
const userId = localStorage.getItem('userId');

const editAddress = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/api/add-address`, { ...data, userId: userId });

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
      const response = await axios.post(`${API_URL}/api/get-address`, { userId: userId });
  
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
  editAddress,
  getAddress
};
