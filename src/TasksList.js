// TasksList.js
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Task from "./Task";

const TasksList = ({ list, deleteItem, editItem }) => {
  return (
    <Row>
      <Col md={{ span: 5, offset: 4 }}>
        <ListGroup>
          {/* map over and print items */}
          {list.map((item, index) => (
            <Task
              key={index}
              item={item}
              deleteItem={() => deleteItem(item.id)}
              editItem={() => editItem(index)}
            />
          ))}
        </ListGroup>
      </Col>
    </Row>
  );
};

export default TasksList;
