import React, { useState, useEffect } from 'react';
import { createComment, getCommentsForPost, editComment, deleteComment, likeComment } from '../../api/commentApi';

function CommentSection({ postId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({ content: '', author: '' });
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [updatedComment, setUpdatedComment] = useState({ content: '' });

  useEffect(() => {
    getCommentsForPost(postId)
      .then((response) => setComments(response.data))
      .catch((error) => console.log(error));
  }, [postId]);

  const handleAddComment = (e) => {
    e.preventDefault();
    createComment({ ...newComment, post: postId })
      .then((response) => setComments([...comments, response.data]))
      .catch((error) => console.log(error));
    setNewComment({ content: '', author: '' });
  };

  const handleLike = (commentId) => {
    likeComment(commentId)
      .then(() => setComments(
        comments.map((comment) => 
          comment._id === commentId ? { ...comment, likes: comment.likes + 1 } : comment
        )
      ))
      .catch((error) => console.log(error));
  };

  const handleEditComment = (commentId, commentContent) => {
    setEditingCommentId(commentId);
    setUpdatedComment({ content: commentContent });
  };

  const handleUpdateComment = (e) => {
    e.preventDefault();
    editComment(editingCommentId, updatedComment)
      .then((response) => {
        setComments(
          comments.map((comment) =>
            comment._id === editingCommentId ? response.data : comment
          )
        );
        setEditingCommentId(null);
        setUpdatedComment({ content: '' });
      })
      .catch((error) => console.log(error));
  };

  const handleDeleteComment = (commentId) => {
    deleteComment(commentId)
      .then(() => setComments(comments.filter((comment) => comment._id !== commentId)))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h3>Comments</h3>
      
      <form onSubmit={handleAddComment}>
        <textarea
          placeholder="Add a comment"
          value={newComment.content}
          onChange={(e) => setNewComment({ ...newComment, content: e.target.value })}
        />
        <input
          type="text"
          placeholder="Author ID"
          value={newComment.author}
          onChange={(e) => setNewComment({ ...newComment, author: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>

      {comments.map((comment) => (
        <div key={comment._id}>
          {editingCommentId === comment._id ? (
            <form onSubmit={handleUpdateComment}>
              <textarea
                value={updatedComment.content}
                onChange={(e) => setUpdatedComment({ content: e.target.value })}
              />
              <button type="submit">Update</button>
              <button onClick={() => setEditingCommentId(null)}>Cancel</button>
            </form>
          ) : (
            <>
              <p>{comment.content}</p>
              <p><strong>Author: {comment.author?.name}</strong></p>
              <p>Likes: {comment.likes}</p>
              <button onClick={() => handleLike(comment._id)}>Like</button>
              <button onClick={() => handleEditComment(comment._id, comment.content)}>Edit</button>
              <button onClick={() => handleDeleteComment(comment._id)}>Delete</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default CommentSection;
