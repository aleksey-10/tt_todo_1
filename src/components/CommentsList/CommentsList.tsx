import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { CommentI } from '../../interfaces/CommentI';

type CommentListProps = {
  comments: CommentI[];
};

export const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  return (
    <ListGroup className="mb-3">
      {
        comments.map(comment => (
          <ListGroup.Item key={comment.id} className="p-0 mx-2 mb-2">
            <div className="comment">
              <div style={{ backgroundColor: comment.color }} className="col-2 comment-picture p-0" />
              <p className="p-1">{comment.title}</p>
            </div>
          </ListGroup.Item>
        ))
      }
    </ListGroup>
  );
};
