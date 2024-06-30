import React from 'react';
import { useComments } from '../../hooks/useComments';
import { CommentItem } from './CommentItem';
import { CommentForm } from './CommentForm';
export {};

interface CommentListProps {
  postId: number;
  currentUserId: number;
}

export const CommentList: React.FC<CommentListProps> = ({ postId, currentUserId }) => {
  const { comments, loading, error, createComment, deleteComment } = useComments(postId);

  if (loading) return <div>Yorumlar yükleniyor...</div>;
  if (error) return <div>Hata: {error}</div>;

  return (
    <div>
      <h3>Yorumlar</h3>
      {comments.map(comment => (
        <CommentItem 
          key={comment.id} 
          comment={comment} 
          onDelete={deleteComment}
          currentUserId={currentUserId}
        />
      ))}
      <CommentForm 
        postId={postId} 
        userId={currentUserId} 
        onSubmit={createComment}
      />
    </div>
  );
};