import React from "react";

export interface PostType {
  id: number;
  title: string;
  text: string;
  userId: number;
  username: string;
  content?: string;
  likeCount?: number;
  profilePictureUrl: string;
}

const Post: React.FC<PostType> = ({
  title,
  text,
  username,
  content,
  likeCount,
  profilePictureUrl,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <img
        src={profilePictureUrl}
        alt={`${username}'s profile`}
        className="w-10 h-10 rounded-full mr-4"
      />
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{text || content}</p>
      <div className="flex justify-between items-center">
        {likeCount !== undefined && (
          <span className="text-sm text-gray-500">Beğeni: {likeCount}</span>
        )}
      </div>
    </div>
  );
};

export default Post;
