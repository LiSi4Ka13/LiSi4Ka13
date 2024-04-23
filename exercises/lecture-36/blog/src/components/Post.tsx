//Post.tsx
import React, { useState, useEffect } from 'react';

function Post() {
  const [post, setPost] = useState({});
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://my-json-server.typicode.com/LiSi4Ka13/db/posts/1');
      const postData = await response.json();
      console.log(postData);
      setPost(postData);
    }
    fetchData();
  }, []);

  function likeThis() {
    setLikes(prevLikes => prevLikes + 1);
  }

  return (
    <article className='post'>
      <div className='cover-container'>
        <img src={post.cover} alt={post.title} />
      </div>
      <div className='post-footer'>
        <h3>{post.title} {post.id}</h3>
        <p>{post.content}</p>
        <button id='like' onClick={likeThis}>
          Like this post <strong>{likes}</strong>
        </button>
      </div>
    </article>
  );
}

export default Post;


