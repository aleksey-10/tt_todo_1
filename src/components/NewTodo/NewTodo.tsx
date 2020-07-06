import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

type FormData = {
  title: string;
};

type NewTodoProps = {
  addTodo(title: string): void;
};

export const NewTodo: React.FC<NewTodoProps> = ({ addTodo }) => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = handleSubmit(({ title }) => {
    addTodo(title);
  });

  return (
    <Form className="align-items-center" onSubmit={onSubmit}>
      <Form.Row>
        <Col>
          <Form.Group as={Col} controlId="newTodo">
            <Form.Control
              type="text"
              placeholder="Type name here..."
              name="title"
              ref={register({ required: true })}
            />
          </Form.Group>
        </Col>
        <Col sm={3} xs="auto">
          <Button
            as={Col}
            variant="info"
            type="submit"
            onClick={onSubmit}
          >
            Add New
          </Button>
        </Col>
      </Form.Row>
    </Form>
  );
};
