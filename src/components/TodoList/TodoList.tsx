import React from 'react';
import {
  ListGroup,
  Button,
  Row,
  Col,
} from 'react-bootstrap';
import { TodoI } from '../../interfaces/TodoI';

type TodoListProps = {
  todos: TodoI[];
  removeTodo(id: string): void;
  setActiveItem(id: string): void;
};

export const TodoList: React.FC<TodoListProps> = ({ todos, removeTodo, setActiveItem }) => (
  <ListGroup>
    {
      todos.map(todo => (
        <ListGroup.Item
          key={todo.id}
          className={`todo ${todo.isActive ? 'todo--active' : ''}`}
          onClick={() => setActiveItem(todo.id)}
        >
          <Row className="align-items-center">
            <Col xs={7}>
              <span>{todo.title}</span>
            </Col>
            <Col xs={2}>
              <div className="bg-info todo-comments">{todo.comments.length}</div>
            </Col>
            <Col xs={3}>
              <Button
                variant="outline-danger"
                type="button"
                onClick={() => {
                  removeTodo(todo.id);
                }}
              >
                Delete
              </Button>
            </Col>
          </Row>
        </ListGroup.Item>
      ))
    }
  </ListGroup>
);
