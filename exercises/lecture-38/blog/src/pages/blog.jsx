import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import BlogInfo from '../components/BlogInfo';
import Posts from '../components/posts.tsx';
import { BlogProvider } from '../components/BlogContext';

function Blog() {
  return (
    <BlogProvider>
      <Layout>
        <Header />
        <BlogInfo />
        <Posts />
      </Layout>
    </BlogProvider>
  );
}

export default Blog;
