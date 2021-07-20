import React from 'react';
import { Button } from 'semantic-ui-react'
import logo1 from '../Assets/images/logo1.png';

function Home() {
    return (
        <div>
            <img src={logo1} alt="devcrowd"/>
            <h1>Welcome to DevCrowd!</h1>
            <h3>The only social media app for Developers.</h3><br></br>
            <Button primary>Login</Button>
            <Button positive>Register</Button>
        </div>
    );
}

export default Home;