import React from 'react';
import { useBlogContext } from './BlogContext';

const Header = () => {
  const blogName = useBlogContext();

  return (
    <header className="bg-gray-800 text-white p-4">
      <h1 className="text-2xl">{blogName}</h1>
    </header>
  );
};

export default Header;
