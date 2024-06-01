import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "../helpers/const";
import axios from "axios";

const EditPost = () => {
  const { id } = useParams();
  const [onePost, setOnePost] = useState({});
  const [name, setName] = useState(onePost.postName);
  const [text, setText] = useState(onePost.postText);
  const [image, setImage] = useState(onePost.postImage);

  const navigate = useNavigate();

  const getPosts = async (id) => {
    const res = await axios.get(`${API}/${id}`);
    const data = res.data;
    setOnePost(data);
  };

  useEffect(() => {
    getPosts(id);
  }, []);

  useEffect(() => {
    setName(onePost.postName);
    setText(onePost.postText);
    setImage(onePost.postImage);
  }, [onePost]);

  const handleClick = () => {
    if (!name || !text || !image) {
      alert("Enter data");
      return;
    }
    let editedPost = {
      postName: name,
      postText: text,
      postImage: image,
    };

    editPost(id, editedPost);
    navigate("/posts");
  };

  const editPost = async (id, post) => {
    await fetch(`${API}/${id}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json;charset=utf-8" },
      body: JSON.stringify(post),
    });
  };

  return (
    <div className="formContainer">
      <h1>Edit your post</h1>
      <form id="postForm">
        <div className="form-group">
          <label>Новое имя:</label>
          <input
            type="text"
            placeholder="Введите имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Новый текст для поста:</label>
          <textarea
            type="text"
            placeholder="Введите текст"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <label>Новая картинка:</label>
          <input
            type="text"
            placeholder="Новая картинка"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <button type="submit" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditPost;
