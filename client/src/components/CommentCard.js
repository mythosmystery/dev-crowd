import React from 'react';
import { useMutation } from '@apollo/client';
import { Card, Button, ListGroupItem } from 'react-bootstrap';
import Auth from '../utils/auth';
import { REMOVE_COMMENT } from '../utils/mutations';
import LikeCommentButton from './LikeCommentButton';
function CommentCard({ comment, datePosted, refetch }) {
   const [removeComment] = useMutation(REMOVE_COMMENT);
   const { _id } = Auth.getProfile();
   const handleCommentDelete = async ({ target }) => {
      const res = await removeComment({ variables: { commentId: target.value } });
      if (res) refetch();
   };
   return (
      <ListGroupItem key={comment._id}>
         <Card>
            <Card.Header>
               {comment.postedBy.name} - ({comment.username})
            </Card.Header>
            <Card.Body>
               <Card.Title>{comment.content}</Card.Title>
               Posted at {datePosted} Likes: {comment.likes.length}
            </Card.Body>
            <Card.Footer>
               {_id === comment.postedBy._id ? (
                  <Button variant="danger" className="mx-3" size="sm" onClick={handleCommentDelete} value={comment._id}>
                     Delete
                  </Button>
               ) : (
                  <LikeCommentButton likes={comment.likes} id={_id} commentId={comment._id} />
               )}
            </Card.Footer>
         </Card>
      </ListGroupItem>
   );
}
export default CommentCard;
