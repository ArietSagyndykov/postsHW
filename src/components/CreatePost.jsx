import React from "react";
import { useState } from "react";
import { API } from "../helpers/const";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreatePost = () => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  let handleClick = () => {
    if (!name || !text || !image) {
      alert("Заполните данные");
    }

    let newPost = {
      postName: name,
      postText: text,
      postImage: image,
    };
    addPost(newPost);
    navigate("/posts");
  };

  let addPost = async (post) => {
    await axios.post(API, post);
  };

  return (
    <div>
      <div className="formContainer">
        <h1>Create a New Post</h1>
        <form id="postForm">
          <div className="form-group">
            <label>Ваш имя:</label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Введите имя"
              value={name}
            />
          </div>
          <div className="form-group">
            <label>Текст для поста:</label>
            <textarea
              onChange={(e) => setText(e.target.value)}
              type="text"
              placeholder="Введите текст"
              value={text}
            ></textarea>
          </div>
          <div className="form-group">
            <label>Картинка:</label>
            <input
              onChange={(e) => setImage(e.target.value)}
              type="text"
              placeholder="Введите имя"
              value={image}
            />
          </div>
          <button type="submit" onClick={handleClick}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
