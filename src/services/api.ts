import axios from 'axios';

const API_URL = 'https://api.example.com';

export const searchItems = async (query: string) => {
  try {
    const response = await axios.get(`${API_URL}/search`, {
      params: { q: query },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching search results:', error);
    throw error;
  }
};

export const getDestination = async (id: number) => {
  try {
    const response = await axios.get(`${API_URL}/destination/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching destination details:', error);
    throw error;
  }
};
