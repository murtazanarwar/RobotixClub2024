import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

export default function PostCard({post}) {
  return (
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      <article className="overflow-hidden rounded-lg shadow-lg">
        <a href={`/post/${post._id}`}>
          <img alt="Placeholder" className="block h-[260px] w-full object-cover" src={post.imageUrl} />
        </a>

        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
          <h1 className="text-lg">
            <a className="no-underline hover:underline text-black line-clamp-2" href={`/post/${post._id}`}>
              {post.title}
            </a>
          </h1>
          <p className="text-grey-darker text-sm">
            {post && new Date(post.updatedAt).toLocaleDateString()}
          </p>
        </header>

        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
          <a className="flex items-center no-underline hover:underline text-black"> 
            <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-small rounded-lg text-xs px-4 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">{post && post.category}</button>
          </a>
        </footer>
      </article>
  </div>
  )
}

// TODO:
//   1. search by category