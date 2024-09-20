import React, { useState, useEffect } from 'react';
import { getAllPosts, createPost, updatePost, deletePost } from '../../api/postApi';
import PostList from '../Posts/PostList';
import PostForm from '../Posts/PostForm';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPosts()
      .then((response) => setPosts(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleCreatePost = (postData) => {
    createPost(postData)
      .then((response) => setPosts([response.data, ...posts]))
      .catch((error) => console.log(error));
  };

  const handleUpdatePost = (postId, updatedPost) => {
    updatePost(postId, updatedPost)
      .then((response) => setPosts(posts.map((post) => post.id === postId ? response.data : post)))
      .catch((error) => console.log(error));
  };

  const handleDeletePost = (postId) => {
    deletePost(postId)
      .then(() => setPosts(posts.filter((post) => post.id !== postId)))
      .catch((error) => console.log(error));
  };

  return (
      <div>
        <h1>Blog Application</h1>
        <PostForm createPost={handleCreatePost} />
        <PostList posts={posts} updatePost={handleUpdatePost} deletePost={handleDeletePost} />
      </div>
  );
}

export default Home;

