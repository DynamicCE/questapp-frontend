import { useState, useEffect } from 'react';
import { PostType } from '../components/post/Post';
import postService from '../services/postService';

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
        // Gelen veriyi PostType'a uygun şekilde dönüştürüyoruz
        const formattedData: PostType[] = data.map((post: any) => ({
          id: post.id,
          title: post.title,
          text: post.text,
          userId: post.userId,
          username: post.username,
          content: post.content,
          likeCount: post.likeCount
        }));
        setPosts(formattedData);
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