export{};
export interface Comment {
  id: number;
  postId: number;
  userId: number;
  content: string;
  created: string;
  updated: string;
}

export type CommentCreate = Omit<Comment, 'id' | 'created' | 'updated'>;

export type CommentUpdate = Partial<CommentCreate>;