import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Login(props) {
    const [formState, setFormState] = useState({ email: '', username: '', password: '' });
    const [login, { error }] = useMutation(LOGIN_USER);

    const handleFormSumbit = async (event) => {
        event.preventDefault();
        try {
            const mutationResponse = await login({
                variables: { email: formState.email, username: formState.username, password: formState.password },
            });
            const token = mutationResponse.data.login.token;
            Auth.login(token)
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };


    return (
        <Form onSubmit={handleFormSumbit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>User Name</Form.Label>
                <Form.Control type="text" placeholder="Enter username" onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={handleChange} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default Login;