import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useLazyQuery } from '@apollo/client';
import { SEARCH_USER } from '../utils/queries';
import SearchCard from './SearchCard';
function Search() {
   const [formState, setFormState] = useState({ username: '' });
   const [searchUser, { loading, data }] = useLazyQuery(SEARCH_USER, { variables: { username: formState.username } });
   const onSubmit = (event) => {
      event.preventDefault();
      //   searchUser();
   };
   const onChange = (event) => {
      const { name, value } = event.target;
      setFormState({
         ...formState,
         [name]: value,
      });
      searchUser();
   };
   console.log(data);
   return (
      <Container>
         <Form onSubmit={onSubmit}>
            <Form.Group>
               <Form.Control type="content" placeholder="Search for a user..." name="username" value={formState.username} onChange={onChange} />
               {/* <Button type="submit" color="dark blue" disabled={!formState.username} className="my-2">
               Search
            </Button> */}
            </Form.Group>
         </Form>
         <Row>
            {data ? (
               data.searchUser.map((user) => {
                  return (
                     <Col xs={6} md={3}>
                        <SearchCard user={user} />
                     </Col>
                  );
               })
            ) : (
               <p></p>
            )}
         </Row>
      </Container>
   );
}
export default Search;
