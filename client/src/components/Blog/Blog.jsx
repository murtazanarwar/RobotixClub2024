import React from 'react'
import { useState, useEffect } from 'react'
import { createPost, getPost, updatePost, deletePost, getAllPosts } from '../../api/postApi';
import PostForm from '../Posts/PostForm';
import PostList from "../Posts/PostList"
import "./Blog.css"

import BlogCard from '../Blog/BlogCard/BlogCard';

export const Blog = () => {
    // const [posts, setPosts] = useState();
    const posts = [{ title: "AI/ML", content: "loadifhaiudfhadiouf dsiuhfiuasdhfuhdsufn", author: "Ayush", date: new Date(), img: "/b1.png" },
    { title: "React", content: "loadifhaiudfhadiouf dsiuhfiuasdhfuhdsufn", author: "A", date: new Date(), img: "/b2.jpeg" },
    { title: "React", content: "loadifhaiudfhadiouf dsiuhfiuasdhfuhdsufn", author: "A", date: new Date(), img: "/b2.jpeg" },
    { title: "React", content: "loadifhaiudfhadiouf dsiuhfiuasdhfuhdsufn", author: "A", date: new Date(), img: "/b2.jpeg" },
    { title: "React", content: "loadifhaiudfhadiouf dsiuhfiuasdhfuhdsufn", author: "A", date: new Date(), img: "/b2.jpeg" },
    { title: "React", content: "loadifhaiudfhadiouf dsiuhfiuasdhfuhdsufn", author: "A", date: new Date(), img: "/b2.jpeg" },
    { title: "React", content: "loadifhaiudfhadiouf dsiuhfiuasdhfuhdsufn", author: "A", date: new Date(), img: "/b2.jpeg" }
    ]
    useEffect(() => {
        getAllPosts()
            .then((response) => setPosts(response.data))
            .catch((error) => console.log(error));
    }, []);

    console.log(posts);


    const handleCreatePost = (postData) => {
        createPost(postData)
            .then((response) => setPosts([response.data, ...posts]))
            .catch((error) => console.log(error));
    };

    const handleUpdatePost = (postId, updatedPost) => {
        updatePost(postId, updatedPost)
            .then((response) => setPosts(posts.map((post) => post.id === postId ? response.data : post)))
            .catch((error) => console.log(error));
    };

    const handleDeletePost = (postId) => {
        deletePost(postId)
            .then(() => setPosts(posts.filter((post) => post.id !== postId)))
            .catch((error) => console.log(error));
    };

    return (
        <div className='blogs'>
            {/* <h1>Blog Application</h1> */}
            {/* {posts.map((d) => {
                console.log(d)
                return (
                    < BlogCard post={d} />
                )
            })} */}
            <main className='p-3 flex flex-col min-h-screen max-w-7x items-center mx-auto'>
                <div className='text-5xl '>
                    <div className='flex justify-center items-center m-6 '>RECENT POSTS</div>
                    <div className="blogsec flex flex-wrap mt-5 max-w-7xl border-red-500 p-5">
                        {
                            posts && posts.map((post) => (
                                <BlogCard key={post._id} post={post} />
                            ))
                        }
                    </div>
                </div>
            </main>

            {/* <div className="postBlog"></div> */}
            {/* <PostForm createPost={handleCreatePost} /> */}
            {/* <PostList posts={posts} updatePost={handleUpdatePost} deletePost={handleDeletePost} /> */}
        </div>
    );
}
