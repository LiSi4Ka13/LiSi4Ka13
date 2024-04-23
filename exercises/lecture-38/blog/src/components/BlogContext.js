import React, { createContext, useContext } from 'react';

const BlogContext = createContext();

export const useBlogContext = () => useContext(BlogContext);

export const BlogProvider = ({ children }) => {
  const blogName = "blog";

  return (
    <BlogContext.Provider value={blogName}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
