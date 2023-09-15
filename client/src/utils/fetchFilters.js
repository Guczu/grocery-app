import axios from 'axios';

async function fetchFilters() {
    const API_URL = 'http://localhost:3001';

  try {
    const response = await axios.get(`${API_URL}/api/available-filters`);
    const { available_shops, available_categories } = response.data;

    return {
      availableShops: available_shops,
      availableCategories: available_categories,
    };
  } catch (error) {
    console.error('Błąd podczas pobierania filtrów:', error);
    throw error;
  }
}

export default fetchFilters;
