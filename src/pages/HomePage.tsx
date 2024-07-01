import React from 'react';
import Post, { PostType } from '../components/post/Post';
import Comment from '../components/comment/Comment';

interface CommentType {
  id: number;
  postId: number;
  username: string;
  content: string;
}

const Home: React.FC = () => {
  // Bu veriler normalde bir API'den gelecektir
  const posts: PostType[] = [
    { id: 1, title: 'Post 1', text: 'Post 1 içeriği', userId: 1, username: 'User1', profilePictureUrl: 'https://example.com/default-profile-picture1.jpg' },
    { id: 2, title: 'Post 2', text: 'Post 2 içeriği', userId: 2, username: 'User2', profilePictureUrl: 'https://example.com/default-profile-picture2.jpg' },
  ];

  const comments: CommentType[] = [
    { id: 1, postId: 1, username: 'Commenter1', content: 'Harika bir post!' },
    { id: 2, postId: 1, username: 'Commenter2', content: 'Katılıyorum!' },
  ];

  return (
    <div className="container mx-auto mt-8 px-4">
      {posts.map(post => (
        <div key={post.id} className="mb-8">
          <Post {...post} />
          <div className="ml-12 mt-4">
            {comments.filter(comment => comment.postId === post.id).map(comment => (
              <Comment key={comment.id} {...comment} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;