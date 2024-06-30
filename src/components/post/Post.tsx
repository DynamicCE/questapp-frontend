import React from 'react';

interface PostProps {
  username: string;
  content: string;
  likeCount: number;
  post: PostType;
}
interface PostType {
  id: number;
  title: string;
  text: string;
  userId: number;
  username: string;
}

const Post: React.FC<PostProps> = ({ username, content, likeCount }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md mb-4">
      <div className="flex items-center mb-2">
        <div className="w-10 h-10 rounded-full bg-gray-600 mr-3"></div>
        <span className="font-semibold">{username}</span>
      </div>
      <p className="mb-4">{content}</p>
      <div className="flex justify-between items-center">
        <button className="bg-secondary text-white px-4 py-2 rounded-full hover:bg-green-600 transition">
          Like ({likeCount})
        </button>
        <button className="text-gray-400 hover:text-white transition">
          Comment
        </button>
      </div>
    </div>
  );
};

export default Post;
export {};