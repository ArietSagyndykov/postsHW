import axios from "axios";
import React from "react";
import { Button, Card } from "react-bootstrap";
import { API } from "../helpers/const";
import { Link } from "react-router-dom";

const PostCard = ({ postName, postText, postImage, id, getPosts }) => {
  const deletePost = async (id) => {
    await axios.delete(`${API}/${id}`);
    getPosts();
  };

  return (
    <div className="my-3 d-flex justify-content-center">
      <Card
        style={{ width: "18rem", height: "25rem" }} // Set fixed height for the card
        className="shadow-lg p-3 mb-5 bg-white rounded"
      >
        <Card.Img
          variant="top"
          src={postImage}
          style={{ height: "150px", objectFit: "cover" }} // Set fixed height for the image
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title>{postName}</Card.Title>
          <Card.Text
            className="text-truncate"
            style={{ flex: 1, overflow: "hidden" }}
          >
            {postText}
          </Card.Text>
          <div className="mt-auto d-flex justify-content-between">
            <Button
              className="btnDelete btn"
              variant="danger"
              onClick={() => deletePost(id)}
            >
              Delete
            </Button>
            <Link to={`/edit/${id}`}>
              <Button className="btnEdit btn" variant="primary">
                Edit
              </Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PostCard;
