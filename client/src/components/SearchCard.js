import React from 'react';
import { Card, Button } from 'react-bootstrap';
import FollowButton from './FollowButton';
function SearchCard({ user }) {
   console.log(user);
   return (
      <>
         <Card className="my-4">
            <Card.Header>{user.name}</Card.Header>
            <Card.Body>
               <Card.Title>{user.username}</Card.Title>
            </Card.Body>
            <Card.Footer>
               <FollowButton id={user._id} />
            </Card.Footer>
         </Card>
      </>
   );
}
export default SearchCard;
