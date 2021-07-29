import React from 'react';
import { Modal } from 'react-bootstrap';
import Search from './Search';
function SearchModal({ showModal, onHide }) {
   return (
      <Modal size="lg" show={showModal} onHide={onHide}>
         <Modal.Header closeButton>
            <Modal.Title>Search for a user:</Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <Search handleModalClose={onHide} />
         </Modal.Body>
      </Modal>
   );
}
export default SearchModal;
