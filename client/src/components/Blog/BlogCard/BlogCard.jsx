import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import "./BlogCard.css"

export default function BlogCard({ post }) {
  // console.log(post);

  return (
    <a href={`/post/${post.title}`}>
      <div className="blogPostHighlight flex rounded-lg m-10">
        <div className="img">
          <img
            src={post.img}
            alt={post.title}
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <h3 className="title text-center text-xl font-bold text-gray-800 mb-2">{post.title}</h3>
        </div>
        <div className="p-4 flex flex-col justify-between">
          <div>
            <p className="content text-gray-600 text-sm mb-2">{post.content} </p>{/* Use excerpt if available, otherwise truncate content */}
          </div>
          <div className=" flex items-center mt-4">
            {post.author && ( // Only display author if it exists
              <span className="author text-gray-500 text-sm mr-2">By {post.author}</span>
            )}
            {post.date && (<span className="date text-gray-500 text-sm">on {new Date(post.date).toLocaleDateString()}</span>)}
          </div>
        </div>
      </div>
    </a>
  )
} 