import React, { useState } from 'react';

interface LikeButtonProps {
  initialLikeCount: number;
}

const LikeButton: React.FC<LikeButtonProps> = ({ initialLikeCount }) => {
  const [likeCount, setLikeCount] = useState(initialLikeCount);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };

  return (
    <button
      onClick={handleLike}
      className={`flex items-center space-x-1 py-1 px-2 rounded ${
        liked ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'
      }`}
    >
      
      <i className="bi bi-heart">{likeCount}</i>
    </button>
  );
};

export default LikeButton;
