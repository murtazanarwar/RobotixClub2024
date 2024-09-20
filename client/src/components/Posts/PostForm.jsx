import React, { useState } from 'react';

function PostForm({ createPost }) {
  const [post, setPost] = useState({ title: '', content: '', author: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createPost(post);
      setSuccess('Post Created successful!');
      setError('');
      setPost({ title: '', content: '', author: '' });
    } catch (error) {
      setError('failed: ' + error.message);
      setSuccess('');
    }
  };

  return (
    <>
    {error && <p style={{ color: 'red' }}>{error}</p>}
    {success && <p style={{ color: 'green' }}>{success}</p>}
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      <textarea
        placeholder="Content"
        value={post.content}
        onChange={(e) => setPost({ ...post, content: e.target.value })}
      />
      <input
        type="text"
        placeholder="Author ID"
        value={post.author}
        onChange={(e) => setPost({ ...post, author: e.target.value })}
      />
      <button type="submit">Add Post</button>
    </form>
    </>
  );
}

export default PostForm;