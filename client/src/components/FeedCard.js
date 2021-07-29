import React from 'react';
import { Card } from 'react-bootstrap';
import moment from 'moment';

function FeedCard({ post }) {
   const datePosted = moment(post.date).format('h:mm a');
   return (
      <>
         <Card className="my-2">
            <Card.Header>{post.postedBy.name}</Card.Header>
            <Card.Title className="m-1">{post.content}</Card.Title>
            <Card.Text>Posted at {datePosted}</Card.Text>
         </Card>
      </>
   );
}
export default FeedCard;
