// Task.js
import React from "react";
import Button from "react-bootstrap/Button";
import ListGroupItem from "react-bootstrap/ListGroupItem";

const Task = ({ item, deleteItem, editItem }) => {
  return (
    <div key={item.id}>
      <ListGroupItem
        variant="dark"
        action
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {item.value}
        <span>
          <Button
            style={{ marginRight: "10px" }}
            variant="dark"
            onClick={deleteItem}
          >
            Done!
          </Button>
          <Button variant="dark" onClick={editItem}>
            Edit
          </Button>
        </span>
      </ListGroupItem>
    </div>
  );
};

export default Task;
