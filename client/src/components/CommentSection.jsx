import React, { useState, useEffect } from 'react';
import { createComment, getCommentsForPost, editComment, deleteComment, likeComment } from '../api/commentApi';

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
        <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-800">Comments</h3>

      {/* Add Comment Form */}
      <form onSubmit={handleAddComment} className="space-y-4">
        <textarea
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Add a comment"
          value={newComment.content}
          onChange={(e) => setNewComment({ ...newComment, content: e.target.value })}
          rows="3"
        />
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Author ID"
          value={newComment.author}
          onChange={(e) => setNewComment({ ...newComment, author: e.target.value })}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
        >
          Submit
        </button>
      </form>

      {/* Comments List */}
      {comments.map((comment) => (
        <div
          key={comment._id}
          className="p-4 bg-gray-50 rounded-md border border-gray-200 space-y-2"
        >
          {editingCommentId === comment._id ? (
            <form onSubmit={handleUpdateComment} className="space-y-2">
              <textarea
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={updatedComment.content}
                onChange={(e) => setUpdatedComment({ content: e.target.value })}
                rows="3"
              />
              <div className="space-x-2">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Update
                </button>
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                  onClick={() => setEditingCommentId(null)}
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <>
              <p className="text-gray-700">{comment.content}</p>
              <p className="text-sm text-gray-600">
                <strong>Author: {comment.author?.name}</strong>
              </p>
              <p className="text-sm text-gray-600">Likes: {comment.likes}</p>

              {/* Action Buttons */}
              <div className="space-x-2">
                <button
                  className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600"
                  onClick={() => handleLike(comment._id)}
                >
                  Like
                </button>
                <button
                  className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  onClick={() => handleEditComment(comment._id, comment.content)}
                >
                  Edit
                </button>
                <button
                  className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                  onClick={() => handleDeleteComment(comment._id)}
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default CommentSection;
