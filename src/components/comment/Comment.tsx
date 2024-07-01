import React from 'react';
import LikeButton from '../like/LikeButton';
import DislikeButton from '../like/DisLikeButton';
interface CommentProps {
  username: string;
  content: string;
}

const Comment: React.FC<CommentProps> = ({ username, content }) => {
  return (
    <div className="bg-[#525252] p-3 rounded-lg mb-2">
      <div className="flex items-center mb-1">
        <div className="w-8 h-8 rounded-full bg-[#b91c1c] mr-2">pp</div>
        <span className="font-semibold text-sm text-[#f3f4f6]">{username}</span>
      </div>
      <p className="text-sm text-[#e5e7eb]">{content}</p>
      <LikeButton initialLikeCount={10} />
      <DislikeButton initialDislikeCount={1} />
    </div>
  );
};

export default Comment;