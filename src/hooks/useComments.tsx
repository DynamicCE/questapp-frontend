import { useState, useEffect, useCallback } from 'react';
import { Comment, CommentCreate } from '../types/Comment';
import { commentService } from '../services/commentService';
export {};

export const useComments = (postId: number) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchComments = useCallback(async () => {
    try {
      setLoading(true);
      const data = await commentService.getCommentsByPostId(postId);
      setComments(data);
      setError(null);
    } catch (err) {
      setError('Yorumlar yüklenirken bir hata oluştu.');
    } finally {
      setLoading(false);
    }
  }, [postId]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  const createComment = useCallback(async (comment: CommentCreate) => {
    try {
      const newComment = await commentService.createComment(comment);
      setComments(prevComments => [...prevComments, newComment]);
    } catch (err) {
      setError('Yorum oluşturulurken bir hata oluştu.');
    }
  }, []);

  const deleteComment = useCallback(async (id: number) => {
    try {
      await commentService.deleteComment(id);
      setComments(prevComments => prevComments.filter(comment => comment.id !== id));
    } catch (err) {
      setError('Yorum silinirken bir hata oluştu.');
    }
  }, []);

  return { comments, loading, error, createComment, deleteComment };
};