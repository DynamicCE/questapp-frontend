import { useState, useEffect } from 'react';
import {postService} from '../services/postService';

interface PostType {
  id: number;
  title: string;
  text: string;
  userId: number;
  username: string;
}

const usePosts = (userId?: number) => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const data = userId 
          ? await postService.getPostsByUser(userId)
          : await postService.getAllPosts();
        setPosts(data);
      } catch (err) {
        setError('Gönderiler yüklenirken bir hata oluştu.');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [userId]);

  return { posts, loading, error };
};

export default usePosts;