import Post from './Post';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Posts () {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/posts')
      .then((response) => {
        const ordered = response.data.sort((a, b) => {
          var dateA = new Date(a.date), dateB = new Date(b.date)
	        return dateB - dateA
        })
        setAllPosts(ordered);

        axios.get('http://localhost:8080/posts/all/comments')
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.log('error in posts.js');
          })

      })
      .catch((error) => {
        console.log('error');
      })
  }, []);

  if (allPosts !== []) {
    return (
      <>
        {allPosts.map((singlePost) => (
          <Post singlePost={singlePost} key={singlePost._id} />
        ))}
      </>
    );
  }
}

export default Posts;