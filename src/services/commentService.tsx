import axios, { AxiosResponse } from 'axios';
import { Comment, CommentCreate, CommentUpdate } from '../types/Comment';
export {};

const API_URL = 'http://localhost:8080/api/v1/comments';

export const commentService = {
  getCommentsByPostId: async (postId: number): Promise<Comment[]> => {
    const response: AxiosResponse<Comment[]> = await axios.get(`${API_URL}/post/${postId}`);
    return response.data;
  },

  getCommentsByUserId: async (userId: number): Promise<Comment[]> => {
    const response: AxiosResponse<Comment[]> = await axios.get(`${API_URL}/user/${userId}`);
    return response.data;
  },

  createComment: async (comment: CommentCreate): Promise<Comment> => {
    const response: AxiosResponse<Comment> = await axios.post(API_URL, comment);
    return response.data;
  },

  updateComment: async (id: number, comment: CommentUpdate): Promise<Comment> => {
    const response: AxiosResponse<Comment> = await axios.put(`${API_URL}/${id}`, comment);
    return response.data;
  },

  deleteComment: async (id: number): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`);
  },

  getCommentById: async (id: number): Promise<Comment> => {
    const response: AxiosResponse<Comment> = await axios.get(`${API_URL}/${id}`);
    return response.data;
  }
};