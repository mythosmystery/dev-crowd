import React from 'react';
import { useMutation } from '@apollo/client';
import { POST_BY_USER } from '../utils/queries';
import { ADD_POST } from '../utils/mutations';
import { Button, Form, Card } from 'react-bootstrap';
import { useForm } from '../utils/hooks';

function MakePost({ refetch, loggedIn }) {
   const [addPost, { error }] = useMutation(ADD_POST);

   const handleFormSubmit = async () => {
      try {
         const { data } = await addPost({ variables: { ...formState } });
         if (data.addPost) {
            formState.content = '';
            refetch();
         }
      } catch (err) {
         console.error(err);
      }
   };

   const { formState, onChange, onSubmit } = useForm(handleFormSubmit);

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
