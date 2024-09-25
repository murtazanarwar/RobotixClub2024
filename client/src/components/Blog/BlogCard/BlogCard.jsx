import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import "./BlogCard.css"

export default function BlogCard({ post }) {
  // console.log(post);

  return (
    // <>
    //   {/* <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"> */}

    //     {/* <article className="overflow-hidden rounded-lg shadow-lg">
    //       <a href={`/post/${post.img}`}>
    //         <img alt="Placeholder" className="block h-[260px] w-full object-cover" src={post.img} />
    //       </a>

    //       <header className="flex items-center justify-between leading-tight p-2 md:p-4">
    //         <h1 className="text-lg">
    //           <a className="no-underline hover:underline text-black line-clamp-2" href={`/post/${post.title}`}>
    //             {post.title}
    //           </a>
    //         </h1>
    //         <p className="text-grey-darker text-sm">
    //           {post && new Date(post.date).toLocaleDateString()}
    //         </p>
    //       </header>

    //     </article> */}

    //     <div className="max-w-3xl mx-auto p-4 bg-white rounded-lg shadow-md">
    //       <h1 className="text-3xl font-bold text-gray-800 mb-4">{post.title}</h1>
    //       <img src={post.image} className="w-full h-64 object-cover rounded-lg mb-4" />
    //       <p className="text-lg text-gray-700 mb-4">{post.content}</p>
    //       <div className="flex justify-between items-center">
    //         {/* <p className="text-gray-500">By {post.author}</p>
    //         <p className="text-gray-500">{post.date}</p> */}
    //       </div>
    //     </div>
    //   {/* </div> */}
    // </>
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
            {post.date && <span className="date text-gray-500 text-sm">{new Date(post.date).toLocaleDateString()}</span>}
          </div>
        </div>
      </div>
    </a>
  )
} 