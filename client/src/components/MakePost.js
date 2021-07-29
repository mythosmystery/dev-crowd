import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_POST } from '../utils/mutations';
import { Button, Form, Card } from 'react-bootstrap';

function MakePost({ refetch, loggedIn }) {
   const [formState, setFormState] = useState({ content: '' });
   const [addPost, { error }] = useMutation(ADD_POST);

   const onSubmit = async (event) => {
      event.preventDefault();
      try {
         const { data } = await addPost({ variables: { ...formState } });
         if (data.addPost) {
            refetch();
            setFormState({ content: '' });
         }
      } catch (err) {
         console.error(err);
      }
   };
   const onChange = (event) => {
      const { name, value } = event.target;
      setFormState({
         ...formState,
         [name]: value,
      });
   };

   return (
      <Card>
         <Card.Header>Make a post!</Card.Header>
         <Card.Body>
            <Form onSubmit={onSubmit}>
               <Form.Group>
                  <Form.Control
                     type="content"
                     placeholder={loggedIn ? "What's on your mind" : 'Please log in to post'}
                     name="content"
                     value={formState.content}
                     onChange={onChange}
                  />
                  <Button type="submit" color="dark blue" disabled={!formState.content || !loggedIn} className="my-2">
                     Post!
                  </Button>
               </Form.Group>
            </Form>
         </Card.Body>
      </Card>
   );
}

export default MakePost;
