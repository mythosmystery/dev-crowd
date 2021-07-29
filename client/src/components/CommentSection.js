import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import MakeComment from './MakeComment';
import CommentCard from './CommentCard';
import moment from 'moment';
function CommentSection({ comments, refetch, postId }) {
   return (
      <>
         {comments.length ? (
            <Card.Body>
               <p>Comments:</p>
               <ListGroup className="list-group-flush">
                  {comments.map((comment) => {
                     const datePosted = moment(comment.date).format('h:mm a');
                     return <CommentCard comment={comment} datePosted={datePosted} />;
                  })}
                  <ListGroupItem>
                     <MakeComment refetch={refetch} postId={postId} />
                  </ListGroupItem>
               </ListGroup>
            </Card.Body>
         ) : (
            <p></p>
         )}
      </>
   );
}
export default CommentSection;
