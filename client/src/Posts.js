import Post from './Post';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Posts () {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/posts')
      .then((response) => {
        setAllPosts(response.data);
      })
      .catch((error) => {
        console.log('error');
      })
  }, []);
  if (allPosts !== []) {
    return (
      <>
        {allPosts.map((singlePost) => (
          <Post singlePost={singlePost} />
        ))}
      </>
    );
  }
}

export default Posts;