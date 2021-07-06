import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Form } from "react-bootstrap";
export class Favoriteform extends Component {
  render() {
    return (
      <>
        <Modal
          show={this.props.show}
          // onHide={handleClose}
          // backdrop="static"
          // keyboard={false}
        >
          <Modal.Header closeButton onClick={this.props.handleclose}>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.props.upadtedataform}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>name</Form.Label>
                <Form.Control
                  type="text"
                  name="strDrink"
                  defaultValue={this.props.strDrink}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>image</Form.Label>
                <Form.Control
                  type="text"
                  name="strDrinkThumb"
                  defaultValue={this.props.strDrinkThumb}
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                onClick={this.props.handleclose}
              >
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default Favoriteform;
