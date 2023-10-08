import axios from 'axios'
import {loadStripe} from '@stripe/stripe-js';

const API_URL = 'http://localhost:3001';

const makeOrder = async (items, deliveryPrice, discountValue, cartValue) => {
  try {
    const stripe = await loadStripe('pk_test_51NxZPaDSuxecRLBOu2ck23JR29AzapqKRJEmCTqgaUGneqVBPGTBjwEDlqhz3BwB5vSb9nwOKqwdqpBJAeFTf37P00JvG7Bcpz');

    const response = await axios.post(`${API_URL}/api/payment/create-payment`, { items: items, deliveryPrice: deliveryPrice, discountValue: discountValue, cartValue: cartValue }, { 
        headers:  {
            "Content-Type": 'application/json'
        }
    });

    const result = stripe.redirectToCheckout({
      sessionId: response.data,
    });

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

const addOrder = async (products) => {
  try {
    const userId = localStorage.getItem('userId');
    const response = await axios.post(`${API_URL}/api/orders/add`, { products: products, userId: userId });

    if (response.status === 200) {
      return response.status;
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

const getOrders = async () => {
  try {
    const userId = localStorage.getItem('userId');
    const response = await axios.post(`${API_URL}/api/orders/get`, { userId: userId });

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
  addOrder,
  getOrders
};
