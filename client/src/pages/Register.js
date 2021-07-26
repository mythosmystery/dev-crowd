import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../utils/mutations';
import Auth from '../utils/auth';

import { Button, Form } from 'react-bootstrap';

function Register(props) {
   const [formState, setFormState] = useState({ email: '', username: '', password: '' });
   const [createUser] = useMutation(CREATE_USER);

   const handleFormSubmit = async (event) => {
      event.preventDefault();
      const mutationResponse = await createUser({
         variables: {
            name: formState.formFname,
            username: formState.formUsername,
            email: formState.formBasicEmail,
            password: formState.formBasicPassword,
         },
      });
      const token = mutationResponse.date.createUser.token;
      Auth.login(token);
   };

   const handleChange = (event) => {
      const { name, value } = event.target;
      setFormState({
         ...formState,
         [name]: value,
      });
   };

   return (
      <div>
         <h1>Create Account</h1>
         <p>Please enter your information to create an account.</p>

         <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="formFname">
               <Form.Label>Full Name </Form.Label>
               <Form.Control required type="text" placeholder="Enter your name" />
            </Form.Group>

            {/* <Form.Group className="mb-3" controlId="formLname">
                    <Form.Label>Last Name </Form.Label>
                    <Form.Control required type="text" placeholder="Enter last name" />
                </Form.Group> */}

            <Form.Group className="mb-3" controlId="formUsername">
               <Form.Label>Username </Form.Label>
               <Form.Control required type="text" placeholder="Enter username" onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Email address </Form.Label>
               <Form.Control required type="email" placeholder="Enter email" onChange={handleChange} />
               <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
               <Form.Label>Password </Form.Label>
               <Form.Control required type="password" placeholder="Password" onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
               <Form.Check required type="checkbox" label="I agree to terms & service" />
            </Form.Group>

            <Button variant="primary" type="submit">
               Submit
            </Button>
         </Form>
      </div>
   );
}

export default Register;
