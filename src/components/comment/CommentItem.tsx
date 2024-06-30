import React from 'react';
import { Comment } from '../../types/Comment';

interface CommentItemProps {
  comment: Comment;
  onDelete: (id: number) => void;
  currentUserId: number;
}

export const CommentItem: React.FC<CommentItemProps> = ({ comment, onDelete, currentUserId }) => {
  const canDelete = comment.userId === currentUserId;

  return (
    <div>
      <p>{comment.content}</p>
      <small>Oluşturulma Tarihi: {new Date(comment.created).toLocaleString()}</small>
      {canDelete && (
        <button onClick={() => onDelete(comment.id)}>Sil</button>
      )}
    </div>
  );
};