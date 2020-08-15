import React, { useState } from 'react';
import './Jumbo.css';
import { Modal, Button } from 'react-bootstrap';

const Jumbo = () => {
  const ModalComponent = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <Button id="cta" variant="primary" onClick={handleShow}>
          MY RESUME
        </Button>

        <Modal size="lg" show={show} onHide={handleClose}>
          <Modal.Header id="modal-header" closeButton></Modal.Header>
          <Modal.Body>
            <img className="img-cv" src="/images/cv.jpg" alt="cv"></img>
          </Modal.Body>
          <Modal.Footer>
            <Button id="modal-header" variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };

  return (
    <div>
      <div className="text-container">
        <h1>HI, I'M OSCAR WIBERG.</h1>
        <p>
          I'M A JUNIOR DEVELOPER FROM STOCKHOLM. TAKE A LOOK AT MY RESUME AND MY
          EARLIER PROJECTS.
        </p>
        <ModalComponent />
      </div>
      <img className="img-ny" src="/images/ny.jpg" alt="new-york"></img>
    </div>
  );
};

export default Jumbo;
