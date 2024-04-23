import React from 'react';
import { useBlogContext } from './BlogContext';

const BlogInfo = () => {
  const blogName = useBlogContext();

  return (
    <div className="my-4">
      <p className="text-gray-600">Welcome to {blogName}!</p>
    </div>
  );
};

export default BlogInfo;
