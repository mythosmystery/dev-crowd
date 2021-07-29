import React from 'react';
import { Card, Container } from 'react-bootstrap';

function ProfileCard({ user }) {
   return (
      <>
         <Container>
            <Card className="my-2">
               <Card.Header>Profile</Card.Header>
               <Card.Body>
                  <Card.Title>
                     {user.name} - ({user.username})
                  </Card.Title>
                  <Card.Text>
                     Email: {user.email}
                     <br></br>
                     Followers: {user.followers.length}
                  </Card.Text>
               </Card.Body>
            </Card>
         </Container>
      </>
   );
}
export default ProfileCard;
