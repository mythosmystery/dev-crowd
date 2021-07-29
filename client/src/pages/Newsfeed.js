import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import FollowingList from '../components/FollowingList';
import MakePost from '../components/MakePost';
import Feed from '../components/Feed';
import Auth from '../utils/auth';
function Newsfeed() {
   const { data, loading, refetch } = useQuery(GET_ME);
   if (loading) return <h2>Loading</h2>;
   return (
      <Container>
         <Row>
            <Col md={3}>
               <Row>
                  <FollowingList />
               </Row>
            </Col>
            <Col xs={12} md={9}>
               <Row className="my-3">
                  <Col>
                     <MakePost refetch={refetch} loggedIn={Auth.loggedIn()} />
                  </Col>
               </Row>
               <Row className="my-2">{data ? <Feed user={data.me} /> : <h2>Error loading posts</h2>}</Row>
            </Col>
         </Row>
      </Container>
   );
}
export default Newsfeed;
