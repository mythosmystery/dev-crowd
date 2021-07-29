import React, { useEffect } from 'react';
import FeedCard from './FeedCard';
import { useQuery } from '@apollo/client';
import { NEWSFEED } from '../utils/queries';
import { Container, Row, Col } from 'react-bootstrap';
import MakePost from '../components/MakePost';
import Auth from '../utils/auth';

function Feed({ user }) {
   const usernames = user.following.map(({ username }) => username);
   const { data, loading, error, refetch } = useQuery(NEWSFEED, { variables: { usernames } });

   if (loading) {
      return <h2>Loading...</h2>;
   }
   if (error) {
      console.log(error);
      return <h2>error</h2>;
   }
   return (
      <>
         <Row className="my-3">
            <Col>
               <MakePost refetch={refetch} loggedIn={Auth.loggedIn()} />
            </Col>
         </Row>
         <Row className="my-2">
            <Container>
               <h2>Newsfeed:</h2>
               {data.newsfeed.map((post) => {
                  return <FeedCard post={post} key={post._id} refetch={refetch} />;
               })}
            </Container>
         </Row>
      </>
   );
}
export default Feed;
