import React, { useState, useEffect, useContext, createContext } from 'react';
import React from 'react';
import Layout from '../components/Layout.jsx';
import Header from '../components/Header.jsx';
import BlogInfo from '../components/BlogInfo.jsx';
import Posts from '../components/Posts.';
import { BlogProvider } from '../components/BlogContext';

const PostContext = createContext({});

const Layout = ({ children }) => {
  return <div className="layout">{children}</div>;
};

const Header = () => {
  return <header>Header</header>;
};

const PostTitle = () => {
  const post = useContext(PostContext);
  return <h1>{post.title}</h1>;
};

const PostMain = () => {
  const post = useContext(PostContext);
  return <main>{post.content}</main>;
};

const Post = () => {
  const [post, setPost] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://my-json-server.typicode.com/LiSi4Ka13/db/posts/1');
      const postData = await response.json();
      console.log(postData);
      setPost(postData);
    }
    fetchData();
  }, []);

  return (
    <PostContext.Provider value={post}>
      <Layout>
        <Header />
        <PostTitle />
        <PostMain />
      </Layout>
    </PostContext.Provider>
  );
};

export default Post;
