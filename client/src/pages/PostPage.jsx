import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { Spinner} from 'flowbite-react';

import { getAllPosts, getPost } from '../api/postApi';

import CommentSection from '../components/CommentSection';
import PostCard from '../components/PostCard';

export default function PostPage() {
    const {postId} = useParams();
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(false);
    const [post,setPost] = useState(null);
    const [recentPosts,setRecentPost] = useState(null);
    
    
    useEffect(() => {
      getAllPosts()
          .then((response) => setRecentPost(response.data))
          .catch((e) => console.log(e));
    }, []);

    useEffect(() => {
      getPost(postId)
          .then((response) => {
            setPost(response.data);
            setError(false);
            setLoading(false);
          })
          .catch((e) => {
            setError(true);
            setLoading(false);
            console.log(e);
          });
    }, []);

  if(loading) return (
    <div className='flex justify-center items-center min-h-screen'>
        <Spinner size = 'xl'></Spinner>
    </div>
  )
  
  return (
    <main className='p-3 flex flex-col max-w-8xl mx-auto min-h-screen'>
        <h1 className='text-3xl mt-10 p-3 text-center font-serif max-w-7xl mx-auto lg:text-4xl'>{post && post.title} </h1>
        <div className='self-center mt-5'>
            <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-small rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">{post && post.category}</button>
        </div>
        <img src={post && post.imageUrl} alt={post && post.title} className='mt-10 p-3 max-h-[600] w-full max-w-7xl self-center object-cover'/>
        <div className="flex justify-between p-3 border-b border-slate-500 mx-auto w-full max-w-7xl text-xs ">
            <span className='italic'>{post && new Date(post.updatedAt).toLocaleDateString()} - {post && (post.content.length/1000).toFixed(0)} mins read</span>
        </div>
        <div className='p-3 text-2xl max-w-7xl mx-auto w-full post-content' dangerouslySetInnerHTML={{__html:post && post.content}}></div>
        <CommentSection postId={post._id}/>
        <div className='flex flex-col justify-center items-center mb-5'>
          <h1 className='text-xl mt-5'>Recents</h1>
          <div className="flex flex-wrap mt-5 max-w-7xl">
            {
              recentPosts && recentPosts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))
            }
          </div>
        </div>
    </main>
  )
}