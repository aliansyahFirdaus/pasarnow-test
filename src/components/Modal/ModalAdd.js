import { Modal, Button, Form } from "react-bootstrap";

import React, { useRef } from "react";

export default function ModalAdd({ show, hide }) {
  const titleRef = useRef();
  const sourceRef = useRef();
  const urlRef = useRef();

  const addNews = (e) => {
    e.preventDefault();
    hide();
  };

  return (
    <Modal show={show} onHide={hide}>
      <Modal.Header closeButton>
        <Modal.Title>Add News</Modal.Title>
      </Modal.Header>

      <Form onSubmit={addNews}>
        <Modal.Body>
          <Form.Control
            type="text"
            ref={titleRef}
            placeholder="News Title"
            className="mb-3 rounded-pill"
          />
          <Form.Control
            type="text"
            ref={sourceRef}
            placeholder="News Source"
            className="mb-3 rounded-pill"
          />
          <Form.Control
            type="text"
            ref={urlRef}
            placeholder="News URL"
            className="mb-3 rounded-pill"
          />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={hide}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Add
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
