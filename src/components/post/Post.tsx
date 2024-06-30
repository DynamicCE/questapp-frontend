import React from 'react';

export interface PostType {
  id: number;
  title: string;
  text: string;
  userId: number;
  username: string;
  // Eğer backend'den gelen veride varsa bu alanları da ekleyin
  content?: string;
  likeCount?: number;
}

const Post: React.FC<PostType> = ({ title, text, username, content, likeCount }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{text || content}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">Yazar: {username}</span>
        {likeCount !== undefined && (
          <span className="text-sm text-gray-500">Beğeni: {likeCount}</span>
        )}
      </div>
    </div>
  );
};

export default Post;