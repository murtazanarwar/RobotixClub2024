import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import "./BlogPost.css"; 

import { createPost } from "../../../api/postApi"

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState(null);
  const [content, setContent] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleContentChange = (content) => {
    setContent(content);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      title,
      category,
      file,
      content,
    });
  };

  return (
    <div className="create-post">
      <h1>Create A Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="title-input"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group">
          <select
            className="category-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select a Category</option>
            <option value="category1">Projects</option>
            <option value="category2">News</option>
            <option value="category2">AI & Machine Learning</option>
            <option value="category2">Collaborations</option>
            <option value="category2">Instructions</option>
            <option value="category2">Events</option>
            <option value="category2">Career Pathways</option>

          </select>
        </div>

        <div className="form-group file-upload">
          <input
            type="file"
            id="file"
            className="file-input"
            onChange={handleFileChange}
          />
          <button type="button" className="upload-btn">
            Upload
          </button>
        </div>

        <div className="form-group tinymce-container">
          <label>Content:</label>
          <div className="tinymce-editor">
            <Editor
              apiKey="d9z39elok5kewan1p7d8ldv5h0f2omeosnrhcs81c07rvm82"
              value={content}
              onEditorChange={handleContentChange}
              init={{
                height: 400,
                menubar: true,
                pluagins: [
                  "advlist autolink lists link image charmap print preview anchor",
                  "searchreplace visualblocks code fullscreen",
                  "insertdatetime media table paste code help wordcount",
                ],
                toolbar:
                  "undo redo | formatselect | bold italic backcolor | \
                  alignleft aligncenter alignright alignjustify | \
                  bullist numlist outdent indent | removeformat | help",
              }}
            />
          </div>
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
