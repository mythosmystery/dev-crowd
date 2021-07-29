import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import FollowingList from '../components/FollowingList';
import Feed from '../components/Feed';

function Newsfeed() {
   const { data, loading, refetch } = useQuery(GET_ME);
   if (loading) return <h2>Loading</h2>;
   return (
      <Container>
         <Row>
            <Col className="d-none d-md-block">
               <Row>
                  <FollowingList />
               </Row>
            </Col>
            <Col xs={12} md={9}>
               <Feed user={data.me} />
            </Col>
         </Row>
      </Container>
   );
}
export default Newsfeed;
