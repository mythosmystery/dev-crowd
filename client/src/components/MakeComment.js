import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_COMMENT } from '../utils/mutations';
import { Button, Form, Card } from 'react-bootstrap';
import Auth from '../utils/auth';

function MakeComment({ refetch, postId }) {
   const [formState, setFormState] = useState({ content: '', postId });
   const [addComment, { error }] = useMutation(ADD_COMMENT);

   const onSubmit = async event => {
      event.preventDefault();
      console.log(formState);
      try {
         const { data } = await addComment({ variables: { ...formState } });
         if (data.addComment) {
            refetch();
            setFormState({ content: '', postId });
         }
      } catch (err) {
         console.error(err);
      }
   };
   const onChange = event => {
      const { name, value } = event.target;
      setFormState({
         ...formState,
         [name]: value
      });
   };

   return (
      <Card>
         <Card.Body>
            <Form onSubmit={onSubmit}>
               <Form.Group>
                  <Form.Control
                     type='content'
                     placeholder={Auth.loggedIn() ? 'Add a comment...' : 'Please log in to comment'}
                     name='content'
                     value={formState.content}
                     onChange={onChange}
                  />
                  <Button
                     type='submit'
                     color='dark blue'
                     disabled={!formState.content || !Auth.loggedIn()}
                     className='my-2'
                  >
                     Comment!
                  </Button>
               </Form.Group>
            </Form>
         </Card.Body>
      </Card>
   );
}

export default MakeComment;
