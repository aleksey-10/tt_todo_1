import React from 'react';
import { TodoI } from '../../interfaces/TodoI';

type CommentsProps = {
  todo: TodoI;
};

export const Comments: React.FC<CommentsProps> = ({ todo }) => {
  return (
    <div className="bg-light todo-field">
      <h2 className="text-secondary">
        Comment&nbsp;#
        {todo.id}
      </h2>
    </div>
  );
};
