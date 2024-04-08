// SubmitForm.js
import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

const SubmitForm = ({ userInput, updateInput, addItem }) => {
  return (
    <Row>
      <Col md={{ span: 5, offset: 4 }}>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="what are we doing today?"
            size="lg"
            value={userInput}
            onChange={(item) => updateInput(item.target.value)}
            aria-label="add something"
            aria-describedby="basic-addon2"
          />
          <InputGroup>
            <Button variant="dark" className="mt-2" onClick={addItem}>
              ADD
            </Button>
          </InputGroup>
        </InputGroup>
      </Col>
    </Row>
  );
};

export default SubmitForm;
