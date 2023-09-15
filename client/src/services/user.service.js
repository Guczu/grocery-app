import axios from 'axios'

const API_URL = 'http://localhost:3001';

const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/api/user/create`, userData);

    if (response.status === 200) {
      console.log('User registered successfully');
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

const loginUser = async (name, password) => {
  try {
    const response = await axios.post(`${API_URL}/api/user/auth`, {
      name,
      password,
    });

    if (response.status === 200 && response.data.token) {
      let expireTime = new Date(new Date().getTime() + 3 * 60 * 60 * 1000);
      localStorage.setItem('userId', response.data.userId);
      return response.status;
    } else {
      throw new Error('Błąd logowania');
    }
  } catch (error) {
    console.error('Błąd logowania:', error);
    throw error;
  }
};

const logoutUser = async () => {
  try {
    const userId = localStorage.getItem('userId');
    const response = await axios.post(`${API_URL}/api/user/logout`, { userId: userId });

    if (response.status === 200) {
      localStorage.removeItem('userId');
    } else {
      throw new Error('Błąd wylogowania');
    }
  } catch (error) {
    console.error('Błąd wylogowania:', error);
    throw error;
  }
}

const isAuthenticated = async () => {
  const userId = localStorage.getItem('userId');

  if (userId) {
    try {
      const token = await axios.post(`${API_URL}/api/user/token`, {
        userId: userId
      });
  
      const response = await axios.post(`${API_URL}/api/user/isauth`, {}, {
        headers: {
          'authorization': `Bearer ${token.data.value}`
      }
      });

      return response.data;
  
    } catch (error) {
      if (error.response && error.response.status === 400) {
        await logoutUser();
        return false;
      }

      throw error;
    }
  } else {
    await logoutUser();
    return false;
  }
}

export {
  registerUser,
  loginUser,
  logoutUser,
  isAuthenticated
};
