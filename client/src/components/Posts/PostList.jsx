import React, { useState } from 'react';
import CommentSection from '../Comments/CommentSection';

function PostList({ posts, updatePost, deletePost }) {
  const [editingId, setEditingId] = useState(null);
  const [updatedPost, setUpdatedPost] = useState({ title: '', content: '' });

  const handleEdit = (id, post) => {
    setEditingId(id);
    setUpdatedPost({ title: post.title, content: post.content });
  };

  const handleUpdate = (id) => {
    updatePost(id, updatedPost);
    setEditingId(null);
  };

  return (
    <div>
      {posts.map((post) => (
        <div key={post._id}>
          {editingId === post._id ? (
            <>
              <input
                value={updatedPost.title}
                onChange={(e) => setUpdatedPost({ ...updatedPost, title: e.target.value })}
              />
              <textarea
                value={updatedPost.content}
                onChange={(e) => setUpdatedPost({ ...updatedPost, content: e.target.value })}
              />
              <button onClick={() => handleUpdate(post._id)}>Update</button>
            </>
          ) : (
            <>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
              <p><strong>Author: {post.author}</strong></p>
              <button onClick={() => handleEdit(post._id, post)}>Edit</button>
              <button onClick={() => deletePost(post._id)}>Delete</button>
            </>
          )}
          <CommentSection postId={post._id} />
        </div>
      ))}
    </div>
  );
}

export default PostList;