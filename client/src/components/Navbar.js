import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import AccountModal from './AccountModal';
import SearchModal from './SearchModal';
import Auth from '../utils/auth';

const AppNavbar = ({ authRoute }) => {
   // set modal display state
   const [showAccountModal, setShowAccountModal] = useState(false);
   const [showSearchModal, setShowSearchModal] = useState(false);

   return (
      <>
         <Navbar bg='dark' variant='dark' expand='lg' sticky='top'>
            <Container fluid>
               <Navbar.Brand as={Link} to='/'>
                  DevCrowd
               </Navbar.Brand>
               <Navbar.Toggle aria-controls='navbar' />
               <Navbar.Collapse id='navbar' className='justify-content-end'>
                  <Nav className='ml-auto'>
                     <Nav.Link as={Link} to='/'>
                        Home
                     </Nav.Link>
                     <Nav.Link onClick={() => setShowSearchModal(true)}>Search</Nav.Link>
                     {/* if user is logged in show logout */}
                     {Auth.loggedIn() ? (
                        <>
                           <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                           <Nav.Link as={Link} to='/Profile'>
                              Profile
                           </Nav.Link>
                        </>
                     ) : (
                        <Nav.Link onClick={() => setShowAccountModal(true)}>Login/Sign Up</Nav.Link>
                     )}
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
         <SearchModal showModal={showSearchModal} onHide={() => setShowSearchModal(false)} />
         <AccountModal showModal={showAccountModal} onHide={() => setShowAccountModal(false)} authRoute={authRoute} />
      </>
   );
};

export default AppNavbar;
