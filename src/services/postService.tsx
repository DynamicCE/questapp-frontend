import axios from 'axios';
import { API_BASE_URL } from '../config/config';
export {};

interface PostType {
  id: number;
  title: string;
  text: string;
  userId: number;
  username: string;
}

export const postService = {
  getAllPosts: async (): Promise<PostType[]> => {
    const response = await axios.get(`${API_BASE_URL}/posts`);
    return response.data;
  },

  getPostsByUser: async (userId: number): Promise<PostType[]> => {
    const response = await axios.get(`${API_BASE_URL}/users/${userId}/posts`);
    return response.data;
  },

  // Diğer post ile ilgili metodlar buraya eklenebilir
};

export default postService;