import axios from 'axios'
import {loadStripe} from '@stripe/stripe-js';
import { API_URL } from '../constants';

const makeOrder = async (items, deliveryPrice, discountValue, cartValue) => {
  try {
    const userId = localStorage.getItem('userId');
    const stripe = await loadStripe('pk_test_51NxZPaDSuxecRLBOu2ck23JR29AzapqKRJEmCTqgaUGneqVBPGTBjwEDlqhz3BwB5vSb9nwOKqwdqpBJAeFTf37P00JvG7Bcpz');

    const token = await axios.post(`${API_URL}/api/user/token`, {
      userId: userId
    });

    const response = await axios.post(`${API_URL}/api/payment/create-payment`, { items: items, deliveryPrice: deliveryPrice, discountValue: discountValue, cartValue: cartValue }, { 
        headers:  {
            "Content-Type": 'application/json',
            'authorization': `Bearer ${token.data.value}` 
        }
    });

     stripe.redirectToCheckout({
       sessionId: response.data,
     });

    return response.data;

  } catch (error) {
    if (error.response) {
      console.error('HTTP Error: ', error.response.status);
      console.error('Error message: ', error.response.data.message);
      return error.response;
    } else if (error.request) {
      console.error('Could not reach the server');
    } else {
      console.error('Unexpected error: ', error.message);
    }
  }
};

const addOrder = async (products, sessionId) => {
  try {
    const userId = localStorage.getItem('userId');
    const response = await axios.post(`${API_URL}/api/orders/add`, { products: products, userId: userId, sessionId: sessionId });

    if (response.status === 200) {
      return response;
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
    const response = await axios.get(`${API_URL}/api/orders/get`, { params: {userId: userId} });

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

const deleteOrder = async (orderId) => {
  try {
    const response = await axios.delete(`${API_URL}/api/orders/delete/${orderId}`);

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

const checkPayment = async () => {
  try {
    const sessionId = localStorage.getItem('sessionId');
    const response = await axios.post(`${API_URL}/api/payment/check-session`, { sessionId: sessionId });

    if (response.status === 200) {
      return response.data.payment_status;
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
  getOrders,
  deleteOrder,
  checkPayment
};
