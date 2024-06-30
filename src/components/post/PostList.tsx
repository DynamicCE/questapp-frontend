import React from 'react';
import usePosts from '../../hooks/usePosts';
import Post from './Post';

interface PostType {
  id: number;
  // Diğer post özellikleri
}



const PostList: React.FC<{ userId?: number }> = ({ userId }) => {
  const { posts, loading, error } = usePosts(userId);

  if (loading) return <div>Yükleniyor...</div>;
  if (error) return <div>Hata: {error}</div>;

  return (
    <div>
      {posts.map((post: PostType) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;