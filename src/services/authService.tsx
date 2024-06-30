import axios from 'axios';
import { API_BASE_URL } from '../config/config';
export {};

const AuthService = {
  login: async (username: string, password: string) => {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, { username, password });
    return response.data;
  },

  register: async (username: string, password: string) => {
    const response = await axios.post(`${API_BASE_URL}/auth/register`, { username, password });
    return response.data;
  },

  logout: async () => {
    // Backend'de logout işlemi varsa burada çağrılabilir
    localStorage.removeItem('token');
  },

  getCurrentUser: () => {
    const userStr = localStorage.getItem('user');
    if (userStr) return JSON.parse(userStr);
    return null;
  }
};

export default AuthService;