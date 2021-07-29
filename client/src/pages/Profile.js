import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import MakePost from '../components/MakePost';
import Auth from '../utils/auth';
import ProfileFeed from '../components/ProfileFeed';
import ProfileCard from '../components/ProfileCard';
import { useQuery } from '@apollo/client';
import { POST_BY_USER, GET_ME } from '../utils/queries';
import FollowingList from '../components/FollowingList';

function Profile() {
   const { username } = Auth.getProfile();
   const { data, error, loading, refetch } = useQuery(POST_BY_USER, { variables: { username } });
   const meQuery = useQuery(GET_ME);

   if (loading || meQuery.loading) return <h2>loading</h2>;

   const { me } = meQuery.data;
   return (
      <Container>
         <Row>
            <Col md={3}>
               <Row>
                  <ProfileCard user={me} />
               </Row>
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
               <Row className="my-2">{data ? <ProfileFeed posts={data.postsByUser} refetch={refetch} /> : <h2>Loading posts</h2>}</Row>
            </Col>
         </Row>
      </Container>
   );
}

export default Profile;
