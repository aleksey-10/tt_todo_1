import React from 'react';
import {
  Form,
  Col,
  Button,
  FormControl,
} from 'react-bootstrap';
import { useForm } from 'react-hook-form';

type FormData = {
  title: string;
  color: string;
};

type NewCommentProps = {
  addComment(todoId: string, title: string, color: string): void;
  todoId: string;
};

export const NewComment: React.FC<NewCommentProps> = ({ addComment, todoId }) => {
  const {
    register,
    handleSubmit,
    errors,
  } = useForm<FormData>();

  const onSubmit = handleSubmit((data) => {
    addComment(todoId, data.title, data.color);
  });

  return (
    <Form className="align-items-center comment-form" onSubmit={onSubmit}>
      <Form.Row>
        <Col xs={3}>
          <Form.Group controlId="newColor" className="h-100">
            <Form.Control
              type="color"
              name="color"
              ref={register({ required: true })}
              className="h-100"
            />
          </Form.Group>
        </Col>
        <Col xs={6}>
          <Form.Group controlId="newComment" className="h-100">
            <FormControl
              as="textarea"
              placeholder="Type comment here..."
              name="title"
              ref={register({ required: true })}
              className={`h-100 ${errors.title ? 'is-invalid' : ''}`}
              onKeyUp={(event: React.KeyboardEvent) => {
                if (event.key === 'Enter' && event.ctrlKey) {
                  onSubmit();
                }
              }}
            />
          </Form.Group>
        </Col>
        <Col xs={3}>
          <Button
            variant="primary"
            type="submit"
            onClick={onSubmit}
            className="h-100 w-100"
          >
            Add New
          </Button>
        </Col>
      </Form.Row>
    </Form>
  );
};
