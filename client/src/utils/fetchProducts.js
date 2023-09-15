import axios from 'axios';

async function fetchProducts(filters, pagination) {
    const API_URL = 'http://localhost:3001';

  try {
    const response = await axios.get(`${API_URL}/api/products`, { params: {...filters, ...pagination} });

    return response.data;
  } catch (error) {
    console.error('Błąd podczas pobierania produktów:', error);
    throw error;
  }
}

export default fetchProducts;
