import { CommentI } from './CommentI';

export interface TodoI {
  id: string;
  title: string;
  isActive: boolean;
  comments: CommentI[];
}
