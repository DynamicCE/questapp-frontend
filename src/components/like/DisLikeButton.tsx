import React, { useState } from 'react';

interface DislikeButtonProps {
  initialDislikeCount: number;
}

const DislikeButton: React.FC<DislikeButtonProps> = ({ initialDislikeCount }) => {
  const [dislikeCount, setDislikeCount] = useState(initialDislikeCount);
  const [disliked, setDisliked] = useState(false);

  const handleDislike = () => {
    if (disliked) {
      setDislikeCount(dislikeCount - 1);
    } else {
      setDislikeCount(dislikeCount + 1);
    }
    setDisliked(!disliked);
  };

  return (
    <button
      onClick={handleDislike}
      className={`flex items-center space-x-1 py-1 px-2 rounded ${
        disliked ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'
      }`}
    >
      <svg
        className={`w-4 h-4 ${disliked ? 'text-white' : 'text-gray-500'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M18 10a2 2 0 00-2-2h-3.586l-1.707-1.707A1 1 0 0010 6H3a1 1 0 00-1 1v10a1 1 0 001 1h7a1 1 0 00.707-.293L12.414 14H16a2 2 0 002-2V10z"
          clipRule="evenodd"
        />
      </svg>
      <span>{dislikeCount}</span>
    </button>
  );
};

export default DislikeButton;
