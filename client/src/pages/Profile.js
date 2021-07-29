import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import MakePost from '../components/MakePost';
import Auth from '../utils/auth';
import ProfileFeed from '../components/ProfileFeed';
import { useQuery } from '@apollo/client';
import { POST_BY_USER } from '../utils/queries';
import FollowingList from '../components/FollowingList';

function Profile() {
   const { username } = Auth.getProfile();
   const { data, error, loading, refetch } = useQuery(POST_BY_USER, { variables: { username } });

   return (
      <Container>
         <Row>
            <Col md={3}>
               <FollowingList />
            </Col>
            <Col xs={12} md={9}>
               <Row className="my-3">
                  <Col>{Auth.loggedIn() ? <MakePost refetch={refetch} /> : <h2>Please Log in</h2>}</Col>
               </Row>
               <Row className="my-2">{data ? <ProfileFeed posts={data.postsByUser} refetch={refetch} /> : <h2>Error loading posts</h2>}</Row>
            </Col>
         </Row>
      </Container>
   );
}

export default Profile;
