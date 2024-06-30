import React from 'react';

interface CommentProps {
  username: string;
  content: string;
}

const Comment: React.FC<CommentProps> = ({ username, content }) => {
  return (
    <div className="bg-gray-700 p-3 rounded-lg mb-2">
      <div className="flex items-center mb-1">
        <div className="w-8 h-8 rounded-full bg-gray-600 mr-2"></div>
        <span className="font-semibold text-sm">{username}</span>
      </div>
      <p className="text-sm">{content}</p>
    </div>
  );
};

export default Comment;