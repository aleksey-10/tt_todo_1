import React from 'react';
import { TodoI } from '../../interfaces/TodoI';
import { CommentList } from '../CommentsList';
import { NewComment } from '../NewComment';

type CommentsProps = {
  todo: TodoI;
  addComment(todoId: string, title: string, color: string): void;
};

export const Comments: React.FC<CommentsProps> = ({ todo, addComment }) => {
  return (
    <div className="bg-light todo-field">
      <h2 className="text-secondary">
        Comments&nbsp;#
        {todo.id}
      </h2>
      <CommentList comments={todo.comments} />
      <NewComment addComment={addComment} todoId={todo.id} />
    </div>
  );
};
