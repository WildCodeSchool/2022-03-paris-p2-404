import React from 'react';
import { useState } from 'react';
import FormPost from './FormPost';
import { JonPost } from './JonPost';
import { UserPost } from './UserPost';

export const UserList = () => {

    const [posts, setPosts] = useState([]);

    const addPost = (post) => {
      if (!post.text || /^\s*$/.test(post.text)) {
        return;
      }
  
       const newPost = [post, ...posts];
  
      setPosts(newPost);
    };
  
    const completePost = (id) => {
      let updatedPosts = posts.map((post) => {
        if (post.id === id) {
          post.isComplete = !post.isComplete;
        }
        return post;
      });
      setPosts(updatedPosts);
    };

  return (

    <div>

      {/* <FormPost onsubmit={addPost} /> */}
     {/* <JonPost posts={posts} completePosts={completePost}/> */}

      <UserPost />
      <UserPost />
      <UserPost />
      <UserPost />
      <UserPost />
      <UserPost />
      <UserPost />
      <UserPost />
      <UserPost />
      <UserPost />
      <UserPost />
      <UserPost />
      <UserPost />
      <UserPost />
      <UserPost />
      <UserPost />
      <UserPost />
      <UserPost />
      <UserPost />
      <UserPost />
      <UserPost />
      <UserPost />
      <UserPost />
      <UserPost />
      
    </div>
  );
};
