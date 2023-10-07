import axios from 'axios'

const API_URL = 'http://localhost:3001';

const makeOrder = async (items, deliveryPrice, discountValue, cartValue) => {
  try {
    const response = await axios.post(`${API_URL}/api/payment/create-payment`, { items: items, deliveryPrice: deliveryPrice, discountValue: discountValue, cartValue: cartValue }, { 
        headers:  {
            "Content-Type": 'application/json'
        }
    });

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
  makeOrder,
};
