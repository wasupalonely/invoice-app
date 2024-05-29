import axios from 'axios';
import axiosInstance from './axiosConfig';

export const fetchApiData = async () => {
  try {
    const response = await axios.get('http://localhost:8080/games');
    return response.data;
  } catch (error) {
    throw new Error('Error fetching data');
  }
};
