import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import MakeComment from './MakeComment';
import CommentCard from './CommentCard';
import moment from 'moment';
function CommentSection({ comments, refetch, postId }) {
   return (
      <>
         <Card.Body>
            <p>Comments:</p>
            <ListGroup className="list-group-flush">
               {comments.map((comment) => {
                  const datePosted = moment(comment.date).format('h:mm a');
                  return <CommentCard comment={comment} datePosted={datePosted} refetch={refetch} key={comment._id} />;
               })}
               <ListGroupItem>
                  <MakeComment refetch={refetch} postId={postId} />
               </ListGroupItem>
            </ListGroup>
         </Card.Body>
      </>
   );
}
export default CommentSection;
