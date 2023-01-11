import Post from './Post';
import Info from './Info';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BodyAll, BodyContent, BodyMain, BodySide } from './Css.style';

function Body () {
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

  return (
    <BodyAll>
      <BodyContent>
        <BodyMain>
          {allPosts.map((singlePost) => (
            <Post singlePost={singlePost} />
          ))}
        </BodyMain>
        <BodySide>
          <Info />
        </BodySide>
      </BodyContent>
    </BodyAll>
  );
}

export default Body;
