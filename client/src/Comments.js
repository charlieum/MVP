import { useEffect, useState } from 'react';
import axios from 'axios';
import { MainContent } from './Css.style.js'
import { useParams } from "react-router-dom";

function Comments () {
  const [postData, setPostData] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios.get('http://localhost:8080/posts/' + id)
      .then((response) => {
        setPostData(response.data);
      })
      .catch((error) => {
        console.log('error');
      })
  }, [id]);

  if(postData !== []) {
    console.log('postData: ', postData);
    return(
      <MainContent>
        <p>{postData.title}</p>
        <p>{postData.user}, {postData.date}</p>
        <p>&nbsp;</p>
        <p>{postData.body}</p>
      </MainContent>
    );
  }
}

export default Comments;