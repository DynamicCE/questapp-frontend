import React from 'react';
import Post from '../components/post/Post';
import Comment from '../components//comment/Comment';

const Home: React.FC = () => {
  // Bu veriler normalde bir API'den gelecektir
  const posts = [
    { id: 1, username: 'User1', content: 'Bu bir örnek post içeriğidir.', likeCount: 5 },
    { id: 2, username: 'User2', content: 'Başka bir örnek post.', likeCount: 3 },
  ];

  const comments = [
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
export {};