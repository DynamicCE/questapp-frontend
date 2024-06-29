import axios from 'axios';

const BASE_URL = "http://localhost:8080/api/v1";

export interface User {
  id: number;
  username: string;
  email: string;
}

export const userService = {
  getAllUsers: async (): Promise<User[]> => {
    const response = await axios.get<User[]>(`${BASE_URL}/users`);
    return response.data;
  },
  
  getUserById: async (id: number): Promise<User> => {
    const response = await axios.get<User>(`${BASE_URL}/users/${id}`);
    return response.data;
  },

  createUser: async (user: Omit<User, 'id'>): Promise<User> => {
    const response = await axios.post<User>(`${BASE_URL}/users`, user);
    return response.data;
  }
};