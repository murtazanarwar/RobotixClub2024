import React, { useState, useEffect } from 'react';
import { createPost, getAllPosts } from '../api/postApi';

export default function CreatePost() {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({ title: '', content: '', author: '', category: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    getAllPosts()
      .then((response) => setPosts(response.data))
      .catch((error) => {
        console.error('Error fetching posts:', error);
        setError('Failed to fetch posts');
      });
  }, []);

  const handleCreatePost = async (postData) => {
    try {
      const response = await createPost(postData);
      setPosts([response.data, ...posts]);
      setSuccess('Post created successfully!');
      setError('');
      setPost({ title: '', content: '', author: '', category: '' });
    } catch (error) {
      console.error('Error creating post:', error);
      setError('Failed to create post');
      setSuccess('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleCreatePost(post);
  };

  return (
    <>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white shadow-md rounded">
        <input
          type="text"
          placeholder="Title"
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          className="w-full mb-3 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
          required
        />
        <input
          type="text"
          placeholder="Category"
          value={post.category}
          onChange={(e) => setPost({ ...post, category: e.target.value })}
          className="w-full mb-3 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
          required
        />
        <textarea
          placeholder="Content"
          value={post.content}
          onChange={(e) => setPost({ ...post, content: e.target.value })}
          className="w-full mb-3 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
          rows="4"
          required
        />
        <input
          type="text"
          placeholder="Author Name"
          value={post.author}
          onChange={(e) => setPost({ ...post, author: e.target.value })}
          className="w-full mb-3 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
          required
        />
        <button
          type="submit"
          className="w-full bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 transition-colors"
        >
          Add Post
        </button>
      </form>
    </>
  );
}

// TODO:
//   1. Author name to ID replacing 