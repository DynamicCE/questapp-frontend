import { useState, useEffect } from 'react';
import {postService} from '../services/postService';

// PostDTO ve diğer DTO'ları buraya da ekleyin

const usePosts = (userId?: number) => {
  const [posts, setPosts] = useState<PostDTO[]>([]);
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