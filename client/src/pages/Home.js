import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FaCode } from 'react-icons/fa';
import { FcIdea, FcCollaboration } from 'react-icons/fc';
function Home() {
   return (
      <div>
         <h1 className='display-1 text-center my-5 text-white'>Welcome to Dev Crowd!</h1>
         <h4 className='display-6 text-center my-5'>The social network for developers</h4>
         <h5 className='text-center my-5'>Share code, thoughts, and ideas with anyone around the world!</h5>
         <Row>
            <Col className='d-flex justify-content-center text-warning'>
               <FaCode size='80' />
            </Col>
            <Col className='d-flex justify-content-center'>
               <FcIdea size='80' />
            </Col>
            <Col className='d-flex justify-content-center'>
               <FcCollaboration size='80' />
            </Col>
         </Row>
      </div>
   );
}

export default Home;
