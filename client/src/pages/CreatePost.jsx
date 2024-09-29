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
      {/* {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      {success && <p className="text-green-500 text-center mb-4">{success}</p>} */}
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-gray-900 shadow-lg rounded-lg">
        
        <h2 className="text-2xl font-semibold mb-6 text-center text-yellow-500">Create a New Post</h2>
        
        <input
          type="text"
          placeholder="Title"
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-yellow-500 transition-all duration-200 placeholder-yellow-500 placeholder-opacity-100 bg-gray-800"
          required
        />

        <input
          type="text"
          placeholder="Category"
          value={post.category}
          onChange={(e) => setPost({ ...post, category: e.target.value })}
          className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-yellow-500 transition-all duration-200 placeholder-yellow-500 placeholder-opacity-100 bg-gray-800"
          required
        />

        <textarea
          placeholder="Content"
          value={post.content}
          onChange={(e) => setPost({ ...post, content: e.target.value })}
          className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-yellow-500 transition-all duration-200 placeholder-yellow-500 placeholder-opacity-100 bg-gray-800"
          rows="5"
          required
        />

        <input
          type="text"
          placeholder="Author Name"
          value={post.author}
          onChange={(e) => setPost({ ...post, author: e.target.value })}
          className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-yellow-500 transition-all duration-200 placeholder-yellow-500 placeholder-opacity-100 bg-gray-800"
          required
        />

        <button
          type="submit"
          className="w-full bg-yellow-600 text-white p-3 rounded-lg hover:bg-yellow-700 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-yellow-500"
        >
          Add Post
        </button>
      </form>
    </>
  );
}

// TODO:
//   1. Author name to ID replacing 