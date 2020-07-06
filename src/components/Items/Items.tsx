import React from 'react';
import { NewTodo } from '../NewTodo';
import { TodoList } from '../TodoList/TodoList';
import { TodoI } from '../../interfaces/TodoI';

type ItemsProps = {
  addTodo(title: string): void;
  todos: TodoI[];
  removeTodo(id: string): void;
  setActiveItem(id: string): void;
};

export const Items: React.FC<ItemsProps> = ({
  todos,
  addTodo,
  removeTodo,
  setActiveItem,
}) => {
  return (
    <div className="bg-light todo-field">
      <h2 className="text-secondary">Items</h2>
      <NewTodo addTodo={addTodo} />
      {
        todos.length
          ? (
            <TodoList
              todos={todos}
              removeTodo={removeTodo}
              setActiveItem={setActiveItem}
            />
          )
          : <h5 className="text-center">No todos yet.</h5>
      }
    </div>
  );
};
