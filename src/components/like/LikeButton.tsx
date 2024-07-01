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
        liked ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
      }`}
    >
      <svg
        className={`w-4 h-4 ${liked ? 'text-white' : 'text-gray-500'}`}
        fill="currentColor"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6.956 1.745C7.021.805 7.918.5 8.473 1.05l.008.008c.34.348.354.896.166 1.319C8.905 2.827 8.5 3.654 8.5 4.5c0 .172.01.345.029.514.07.58.178 1.062.322 1.45.12.32.305.636.54.872.184.186.376.321.537.466H6.233a.5.5 0 0 1-.465-.314l-.936-2.32a1.5 1.5 0 0 0-1.224-.832L2.07 3.768c-.13-.026-.26-.04-.388-.042H2a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h.182l.06-.006c.06-.005.123-.008.186-.009H4a.5.5 0 0 1 .5.5v.01c.054.063.108.13.163.203.084.11.165.236.245.378.153.279.295.634.395 1.036.13.548.272 1.149.376 1.666a1.499 1.499 0 0 1-.03.446c-.017.079-.045.163-.084.247-.114.25-.239.544-.365.87-.082.213-.166.443-.26.685-.165.416-.333.882-.467 1.242H6.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-2.066a.5.5 0 0 1 .225-.416c.154-.111.343-.27.541-.467.359-.36.69-.88.98-1.517.155-.34.29-.735.392-1.19A7.104 7.104 0 0 0 6.64 4.5C6.642 4.2 6.646 3.79 6.65 3.31c.004-.48.01-.8.006-.92l-.4-.64c-.34-.35-.435-.856-.342-1.292.093-.435.57-.718.912-.408l.008.008zM14 14h1.5a.5.5 0 0 0 0-1H14v1zm1-2h1.5a.5.5 0 0 0 0-1H15v1zm1-2h1.5a.5.5 0 0 0 0-1H16v1zm1-2h1.5a.5.5 0 0 0 0-1H17v1zM10.5 15h1a.5.5 0 0 0 .5-.5v-1.793a.5.5 0 0 0-.147-.354l-1.5-1.5a.5.5 0 0 0-.707 0l-1.5 1.5a.5.5 0 0 0-.147.354V14.5a.5.5 0 0 0 .5.5h1v1z"/>
      </svg>
      <span>{likeCount}</span>
    </button>
  );
};

export default LikeButton;
