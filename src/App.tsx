import React, { useState, useEffect } from 'react';
import './App.css';
import { uuid } from 'uuidv4';
import { Items } from './components/Items';
import { Comments } from './components/Comments/Comments';
import { TodoI } from './interfaces/TodoI';

const App: React.FC = () => {
  const [todos, setTodos] = useState<TodoI[]>(JSON.parse(localStorage.getItem('todos') || '[]'));

  const addTodo = (title: string) => {
    setTodos(prev => [
      ...prev,
      {
        title,
        id: uuid(),
        isActive: false,
        comments: [],
      },
    ]);
  };

  const removeTodo = (id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const setActiveItem = (id: string) => {
    setTodos(prev => prev.map(todo => {
      if (todo.id === id) {
        return { ...todo, isActive: true };
      }

      return { ...todo, isActive: false };
    }));
  };

  if (todos.length && todos.every(todo => !todo.isActive)) {
    setTodos(prev => prev.map((todo, index) => {
      if (index === prev.length - 1) {
        return { ...todo, isActive: true };
      }

      return todo;
    }));
  }

  const activeItem: TodoI | undefined = todos.find(todo => todo.isActive);

  const addComment = (todoId: string, title: string, color: string) => {
    setTodos(prev => prev.map(todo => {
      if (todoId === todo.id) {
        return {
          ...todo,
          comments: [
            ...todo.comments,
            {
              id: uuid(),
              title,
              color,
            },
          ],
        };
      }

      return todo;
    }));
  };

  return (
    <div className="App container">
      <Items
        todos={todos}
        addTodo={addTodo}
        removeTodo={removeTodo}
        setActiveItem={setActiveItem}
      />
      {
        activeItem && <Comments todo={activeItem} addComment={addComment} />
      }
    </div>
  );
};

export default App;
